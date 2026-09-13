<script lang="ts">
	import { hyphenate } from "hyphen/fr";

	let input = $state("");

	let output = $derived(
		await hyphenate(input, {
			hyphenChar: " - ",
		}),
	);

	const params = new URLSearchParams(window.location.search);
	input = params.get("mot") ?? "";

	$effect(() => {
		const url = new URL(window.location.href);

		if (input) {
			url.searchParams.set("mot", input);
		} else {
			url.searchParams.delete("mot");
		}

		history.replaceState(null, "", url);
	});
</script>

<main>
	<h1>Césures</h1>

	<p>
		Prend un texte français en entrée et indique là où les césures
		(coupures) du mot devraient se placer. {#if window.location.protocol !== "file:"}
			<a href="./index.html" download="Césures.html"
				>Télécharger cette application pour utilisation locale.</a
			>
		{/if}
	</p>

	<textarea bind:value={input} placeholder="Écrivez votre texte..." rows={5}
	></textarea>

	{#if output}
		<div class="result">{output}</div>
	{/if}

	<div class="badges">
		<a href="https://aapix.me" target="_blank" title="Créé par apix avec <3"
			><img
				src="https://aapix.me/88x31.gif"
				alt=""
				height="31"
				width="88"
			/></a
		>
	</div>
</main>

<style>
	main {
		max-width: 800px;
		margin: 80px auto;
		padding: 0 20px;
	}

	@media screen and (max-width: 768px) {
		main {
			margin: 60px auto;
			padding: 0 10px;
		}
	}

	a[download] {
		color: inherit;
		font-weight: 600;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}

	h1 {
		margin-bottom: 0.5rem;
	}

	textarea {
		width: 100%;
		padding: 16px;
		font-size: 1.1rem;
		border-radius: 8px;
		resize: vertical;
		border: none;
		background-color: var(--bg-2);
		color: var(--text);
		&::placeholder {
			color: var(--text-2);
		}
	}

	.result {
		margin-top: 0.6rem;
		padding: 16px;
		background: var(--bg-3);
		border-radius: 8px;
		font-size: 1.1rem;
		line-height: 1.7;
		white-space: pre-wrap;
	}

	.badges {
		display: flex;
		justify-content: center;
		margin-top: 0.6rem;
	}
</style>
