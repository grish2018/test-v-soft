<template>
  <div class="template-editor">
    <h2 class="template-editor__title">Админская страница</h2>
    <div class="template-editor__input-section">
      <label for="template" class="template-editor__label">Шаблон:</label>
      <textarea id="template" v-model="templateContent" class="template-editor__textarea"></textarea>
    </div>
    <div class="template-editor__input-section">
      <label for="data" class="template-editor__label">Стили:</label>
      <textarea id="data" v-model="styleContent" class="template-editor__textarea"></textarea>
    </div>
    <button @click="saveTemplate" class="template-editor__button">Save</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const templateContent = ref('');
    const styleContent = ref('');

    const loadTemplate = () => {
      axios.get('http://localhost:3000/api/template')
        .then(response => {
          templateContent.value = response.data.template;
          styleContent.value = response.data.style;
        });
    };

    const saveTemplate = () => {
      axios.post('http://localhost:3000/api/template', {
        template: templateContent.value,
        style: styleContent.value
      }).then(() => {
        alert('Template saved!')
        window.location.reload();
      });
    };

    loadTemplate();

    return {
      templateContent,
      styleContent,
      saveTemplate
    };
  }
};
</script>

<style>
.template-editor {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.template-editor__title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.template-editor__input-section {
  margin-bottom: 20px;
}

.template-editor__label {
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.template-editor__textarea {
  width: 100%;
  min-height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  transition: border-color 0.3s ease;
}

.template-editor__textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.template-editor__button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.template-editor__button:hover {
  background-color: #0056b3;
}
</style>
