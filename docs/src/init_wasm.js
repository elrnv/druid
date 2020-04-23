import init, {
        anim,
        calc,
        custom_widget,
        either,
        flex,
        game_of_life,
        hello,
        identity,
        image,
        layout,
        lens,
        list,
        multiwin,
        panels,
        parse,
        scroll_colors,
        scroll,
        split_demo,
        styled_text,
        switches,
        timer,
        view_switcher,
} from './pkg/druid_wasm_examples.js';

async function run() {
    await init();
    anim("canvas_anim");
    calc("canvas_calc");
    custom_widget("canvas_custom_widget");
    either("canvas_either");
    flex("canvas_flex");
    game_of_life("canvas_game_of_life");
    hello("canvas_hello");
    identity("canvas_identity");
    image("canvas_image");
    layout("canvas_layout");
    lens("canvas_lens");
    list("canvas_list");
    multiwin("canvas_multiwin");
    panels("canvas_panels");
    parse("canvas_parse");
    scroll_colors("canvas_scroll_colors");
    scroll("canvas_scroll");
    split_demo("canvas_split_demo");
    styled_text("canvas_styled_text");
    switches("canvas_switches");
    timer("canvas_timer");
    view_switcher("canvas_view_switcher");
}

run();
