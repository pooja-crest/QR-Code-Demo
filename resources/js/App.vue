<template>
	<div id="app">
		<router-view></router-view>
		<notifications group="notification" :speed="1000" position="bottom right" />
	</div>
</template>

<style lang="scss">
</style>
