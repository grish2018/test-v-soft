<template>
  <TemplateEditor/>
  <div class="generated-component">
    <h2 class="generated-component__title">SFC компонент</h2>
    <DataViewer />
  </div>
</template>

<script>
import TemplateEditor from './components/TemplateEditor.vue'
import DataViewer from './components/DynamicComponent/DataViewer.vue'

export default {
  name: 'App',
  components: {
    TemplateEditor,
    DataViewer
  }
}
</script>

<style>
.generated-component {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.generated-component__title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}
</style>
