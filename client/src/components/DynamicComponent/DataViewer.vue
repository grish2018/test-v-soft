<template>
  <div v-html="compiledHtml"></div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const compiledHtml = ref('<div>Loading...</div>');

    onMounted(async () => {
      try {
        const { data: templateData } = await axios.get('http://localhost:3000/api/template');
        const { data } = await axios.get('http://localhost:3000/api/data');
        let template = templateData.template || '<div>{{ title }}<br>{{ text }}</div>';
        const style = `<style>${templateData.style || 'div { color: red; }'}</style>`;
        template = template.replace('dataTitle', data.title).
        replace('dataText', data.text).
        replace('dataiImgUrl', data.imageUrl)
    
        compiledHtml.value = style + template;
      } catch (error) {
        compiledHtml.value = '<div>Error loading data!</div>';
      }
    });

    return { compiledHtml };
  }
};
</script>