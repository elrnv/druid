# Examples

## Identity

<canvas id="canvas"></canvas>
<script type="module">
    import init, { identity } from '../pkg/druid_wasm_examples.js';

    async function run() {
        await init();
        identity();
    }

    run();
</script>

