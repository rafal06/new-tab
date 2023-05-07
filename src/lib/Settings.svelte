<script lang="ts">
    import { fly } from 'svelte/transition';
    import settingsIcon from '../assets/settingsIcon.svg';
    import dismissIcon from '../assets/dismissIcon.svg';

    let showPopup = false;
</script>

<button class="open-btn btn-clear" on:click={() => showPopup = true}>
    <img src={settingsIcon} alt="settings">
</button>

{#if showPopup}
    <div class="popup" transition:fly={{ x: 500, duration: 350 }}>
        <div class="flex align-center justify-space-between" style="margin-bottom: 20px;">
            <h1 class="margin-none">Settings</h1>
            <button class="close-btn btn-clear" on:click={() => showPopup = false}>
                <img src={dismissIcon} alt="close">
            </button>
        </div>
    </div>
{/if}

<style>
    .open-btn {
		position: absolute;
		right: 30px;
		top: 30px;

        cursor: pointer;
        opacity: var(--light-opacity);
        transition: opacity ease 0.1s;
	}
    .open-btn:hover {
        opacity: 1;
    }

    .close-btn {
        cursor: pointer;
    }

    .popup {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 50;
        width: 500px;
        padding: 25px 30px;
        background-color: var(--dark-bg);
    }
</style>
