<script setup lang="ts">
defineProps<{
	title: string
	url?: string
}>()
</script>

<template>
    <div class="p:24">
        <div class="flex ai:center">
			<slot name="icon" />
            <div class="ml:32 f:18 lh:1.2 f:semibold">
				<component
					:is="url ? 'a' : 'span'"
					:href="url"
					class="fg:gray-10 fg:white@dark"
					:class="{ 'f:underline': url }"
					v-text="title"
				/>
			</div>
		</div>

        <div class="ml:48">
            <div class="mt:8 fg:gray-30 fg:gray-60@dark f:14">
				<slot />
			</div>
		</div>
	</div>
</template>
