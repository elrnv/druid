// Copyright 2020 The xi-editor Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use wasm_bindgen::prelude::*;

macro_rules! impl_example {
    ($fn:ident) => {
        #[wasm_bindgen]
        pub fn $fn(canvas_id: &str) {
            std::panic::set_hook(Box::new(console_error_panic_hook::hook));
            examples::$fn::launch(canvas_id).unwrap();
        }
    };
}

// This line includes an automatically generated (in build.rs) examples module.
// This particular mechanism is chosen to avoid any kinds of modifications to committed files at
// build time, keeping the source tree clean from build artifacts.
include!("examples.in");
