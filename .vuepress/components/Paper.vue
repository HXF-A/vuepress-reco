<template>
    <div>
        <h-paper :current.sync="current" :total="total"></h-paper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 1,
            total: 5
        }
    }
}
</script>