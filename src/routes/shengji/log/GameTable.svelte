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
            const gameCount = games.length;
            const previousGame = games[gameCount - 1];
            currentGame = {
                gameNum: gameCount + 1,
                winningTeam: gameCount > 0 ? previousGame.winningTeam : [],
                losingTeam: gameCount > 0 ? previousGame.losingTeam : [],
                winTier: gameCount > 0 ? previousGame.winTier : 1,
                stateAfter: {},
            };
        }
    });

    function addGame() {
        if (currentGame === null) {
            return;
        }

        currentGame.losingTeam = playing.filter(
            (player) => !currentGame?.winningTeam.includes(player)
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
            currentGame.winTier
        );

        games.push(currentGame);
        currentGame = null;
    }
</script>

{#if playing.length !== 0}
    <div class="overflow-auto">
        <table class="border border-zinc-50">
            <thead>
                <tr>
                    <td class="border border-zinc-50 px-4 py-2"></td>
                    {#each playing as playerId}
                        <th class="border border-zinc-50 px-4 py-2"
                            >{playerMap[playerId].name}</th
                        >
                    {/each}

                    <td class="border border-zinc-50 px-4 py-2"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-zinc-50 px-4 py-2"></td>

                    {#each playing as playerId}
                        <td
                            class="border border-zinc-50 px-4 py-2 text-center font-macondo"
                            class:underline={playerStateMap[playerId].onStage}
                        >
                            {rankToString(playerStateMap[playerId].rank)}
                        </td>
                    {/each}

                    <td class="border border-zinc-50 px-4 py-2"></td>
                </tr>

                {#each games as game (game.gameNum)}
                    <tr>
                        <td class="border border-zinc-50 px-4 py-2"
                            >Game {game.gameNum}</td
                        >

                        {#each Object.keys(game.stateAfter) as playerId}
                            <td
                                class="border border-zinc-50 px-4 py-2 text-center font-macondo"
                                class:underline={game.stateAfter[playerId]
                                    .onStage}
                                >{rankToString(
                                    game.stateAfter[playerId].rank
                                )}</td
                            >
                        {/each}

                        <td class="border border-zinc-50 px-4 py-2"></td>
                    </tr>
                {/each}

                {#if currentGame !== null}
                    <tr>
                        <td class="border border-zinc-50 px-4 py-2 text-center">
                            <button
                                onclick={addGame}
                                class="size-6 border border-zinc-50 rounded-md"
                                >&plus;</button
                            >
                        </td>

                        {#each playing as playerId}
                            <td
                                class="border border-zinc-50 px-4 py-2 text-center"
                            >
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    value={playerId}
                                    bind:group={currentGame.winningTeam}
                                    class="size-6"
                                />
                            </td>
                        {/each}

                        <td class="px-4 py-2 text-center">
                            <label for="">Win Tier</label>
                            <select
                                name=""
                                id=""
                                bind:value={currentGame.winTier}
                                class="border border-zinc-50 bg-zinc-800"
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                        </td>
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
{/if}
