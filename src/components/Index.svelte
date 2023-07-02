<script>
    import summarizeIcon from './summarize.png';
    import searchIcon from './search.png';
    
	let name = ""
	const handleSummarize = () => {
	
	}

	
</script>

<div class="flex bg-gray-100">
    <button on:click={handleSummarize} class="p-2 w-12 h-12 relative hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
        <img alt="summarizer-icon" src={summarizeIcon} class="w-6 h-6">
    </button>
    <button class="p-2 w-12 h-12 relative hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
        <img alt="search-icon" src={searchIcon} class="w-6 h-6">
    </button>
</div>
