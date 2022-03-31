<template>
  <div
    class="bg-gradient-26 w-screen h-screen flex flex-col items-center justify-center"
  >
    <span class="bg-white p-4 shadow rounded text-lg space-y-4">
      <video :src="video" controls class="rounded" />
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="transcode"
      >
        Start
      </button>
    </span>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'App',
    setup() {
      // app state
      const ffmpeg = createFFmpeg({
        log: true,
      });
      const message = ref('Click Start to Transcode');
      let video = ref(null);
      const file = '/flame.avi';
      // methods
      /**
       *
       */
      async function transcode() {
        message.value = 'Loading ffmeg-core.js';
        if (!ffmpeg.isLoaded()) {
          await ffmpeg.load();
        }
        message.value = 'Start transcoding';
        ffmpeg.FS('writeFile', 'test.avi', await fetchFile(file));
        await ffmpeg.run('-i', 'test.avi', 'test.mp4');
        message.value = 'Complete transcoding';
        const data = ffmpeg.FS('readFile', 'test.mp4');
        video.value = URL.createObjectURL(
          new Blob([data.buffer], { type: 'video/mp4' }),
        );
      }
      return {
        video,
        message,
        transcode,
      };
    },
  });
</script>
