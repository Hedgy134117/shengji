<script lang="ts">
    import { calculateNewState } from "$lib/services/shengJiService";
    import type { Player, PlayerState, ShengjiGame } from "$lib/types";
    import { rankToString } from "$lib/utils/rankCalculation";

    interface Props {
        playing: string[];
        playerMap: Record<string, Player>;
        playerStateMap: Record<string, PlayerState>;
        games: ShengjiGame[];
    }

    let { playing, playerMap, playerStateMap, games }: Props = $props();

    let currentGame: ShengjiGame | null = $state(null);

    $effect(() => {
        if (playing.length > 0 && currentGame === null) {
            currentGame = {
                gameNum: games.length + 1,
                winningTeam:
                    games.length > 0 ? games[games.length - 1].winningTeam : [],
                losingTeam:
                    games.length > 0 ? games[games.length - 1].losingTeam : [],
                winTier: games.length > 0 ? games[games.length - 1].winTier : 1,
                stateAfter: {},
            };
        }
    });

    function addGame() {
        if (currentGame === null) {
            return;
        }

        currentGame.losingTeam = playing.filter(
            (player) => !currentGame?.winningTeam.includes(player),
        );

        if (
            currentGame.winningTeam.length < 2 ||
            currentGame.losingTeam.length < 2
        ) {
            return;
        }

        if (
            currentGame.winningTeam.length + currentGame.losingTeam.length >
            5
        ) {
            return;
        }

        const currentState: Record<string, PlayerState> = {};
        for (let playerId of playing) {
            if (games.length === 0) {
                currentState[playerId] = playerStateMap[playerId];
            } else {
                currentState[playerId] =
                    games[games.length - 1].stateAfter[playerId];
            }
        }

        currentGame.stateAfter = calculateNewState(
            currentState,
            currentGame.winningTeam,
            currentGame.losingTeam,
            currentGame.winTier,
        );

        games.push(currentGame);
        currentGame = null;
    }
</script>

<table class="border border-black">
    <thead>
        <tr>
            {#if playing.length !== 0}
                <td class="border border-black px-4 py-2"></td>
            {/if}

            {#each playing as playerId}
                <th class="border border-black px-4 py-2"
                    >{playerMap[playerId].name}</th
                >
            {/each}

            {#if playing.length !== 0}
                <td class="border border-black px-4 py-2"></td>
            {/if}
        </tr>
    </thead>
    <tbody>
        <tr>
            {#if playing.length !== 0}
                <td class="border border-black px-4 py-2"></td>
            {/if}

            {#each playing as playerId}
                <td
                    class="border border-black px-4 py-2 {playerStateMap[
                        playerId
                    ].onStage
                        ? 'underline'
                        : ''}"
                >
                    {rankToString(playerStateMap[playerId].rank)}
                </td>
            {/each}

            {#if playing.length !== 0}
                <td class="border border-black px-4 py-2"></td>
            {/if}
        </tr>

        {#each games as game (game.gameNum)}
            <tr>
                <td class="border border-black px-4 py-2"
                    >Game {game.gameNum}</td
                >

                {#each Object.keys(game.stateAfter) as playerId}
                    <td
                        class="border border-black px-4 py-2 {game.stateAfter[
                            playerId
                        ].onStage
                            ? 'underline'
                            : ''}"
                        >{rankToString(game.stateAfter[playerId].rank)}</td
                    >
                {/each}

                <td class="border border-black px-4 py-2"></td>
            </tr>
        {/each}

        {#if currentGame !== null}
            <tr>
                <td class="border border-black px-4 py-2">
                    <button onclick={addGame}>&plus;</button>
                </td>

                {#each playing as playerId}
                    <td class="border border-black px-4 py-2">
                        <label for="">Won</label>
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            value={playerId}
                            bind:group={currentGame.winningTeam}
                        />
                    </td>
                {/each}

                <td>
                    <label for="">Win Tier</label>
                    <select name="" id="" bind:value={currentGame.winTier}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </td>
            </tr>
        {/if}
    </tbody>
</table>
