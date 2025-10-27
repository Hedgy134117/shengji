<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import "../../app.css";
    import Navbar from "../Navbar.svelte";
    import SubNavbar from "./SubNavbar.svelte";

    let { children } = $props();
</script>

<SubNavbar />
{@render children?.()}
