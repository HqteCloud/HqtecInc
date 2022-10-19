<script setup>
const props = defineProps([
    "groupArray", "title", "extra", "placeholder", "type"
])
</script>
<template>
    <!-- GROUPED INPUT -->
    <div class="group" v-if="props.type === 'group'">
        <div class="wrapper">
            <div class="input-box" v-for="{ type, field, placeholder, extra } in props.groupArray" :key="field">
                <label :for="field">{{ field }}*</label>
                <input :type="type" :placeholder="placeholder">
                <p>{{ extra }}</p>
            </div>
        </div>
    </div>
    <!-- SINGLE INPUT -->
    <div class="input-box" v-else>
        <label :for="props.title" :placeholder="props.placeholder">{{ props.title }}*</label>
        <input :type="props.type" v-if="props.type !== 'textarea'">
        <textarea v-else class="small"></textarea>
        <p></p>
    </div>
</template>
<style lang="scss" scoped>

</style>