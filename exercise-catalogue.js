// ═══════════════════════════════════════════════════════
// FORGE EXERCISE CATALOGUE — CANONICAL COPY
// ═══════════════════════════════════════════════════════
// THIS FILE IS THE SOURCE OF TRUTH for the exercise catalogue.
//
// A second, identical copy lives inline in the frontend as EXERCISE_DB
// (Staging Frontend/app.html, "const EXERCISE_DB = [") where the custom programme
// builder needs it without a network round-trip. The two MUST be reconciled on every
// change — edit THIS file first, then mirror it into app.html.
//
// Duplicated constants are responsible for a large share of this codebase's bugs. The
// duplication is tolerated here only because the builder needs an offline copy; it is
// not a pattern to repeat.
//
// Shape (all six keys present on every entry):
//   { id, name, primary:[], secondary:[], equipment, type }
// equipment values: barbell, dumbbell, cable, machine, bodyweight, kettlebell, bands
//   — these are the SAME class names EQUIPMENT_TIER_ALLOWS uses in server.js, so tier
//   filtering reads e.equipment directly with no translation layer.
// muscle values: chest, back, shoulders, biceps, triceps, forearms, quads,
//   hamstrings, glutes, calves, core, traps, lats
// type values: compound, isolation
//
// NOTE ON id: these are string slugs ('bench_press'), NOT MuscleWiki integer ids. Do not
// feed them to anything expecting the old mw_id integer.
// ═══════════════════════════════════════════════════════

const EXERCISE_CATALOGUE = [
  // ---- CHEST ----
  { id:'bench_press', name:'Bench Press', primary:['chest'], secondary:['shoulders','triceps'], equipment:'barbell', type:'compound' },
  { id:'incline_bench_press', name:'Incline Bench Press', primary:['chest'], secondary:['shoulders','triceps'], equipment:'barbell', type:'compound' },
  { id:'decline_bench_press', name:'Decline Bench Press', primary:['chest'], secondary:['triceps'], equipment:'barbell', type:'compound' },
  { id:'dumbbell_fly', name:'Dumbbell Fly', primary:['chest'], secondary:['shoulders'], equipment:'dumbbell', type:'isolation' },
  { id:'cable_fly', name:'Cable Fly', primary:['chest'], secondary:['shoulders'], equipment:'cable', type:'isolation' },
  { id:'push_up', name:'Push Up', primary:['chest'], secondary:['shoulders','triceps','core'], equipment:'bodyweight', type:'compound' },
  { id:'dips', name:'Dips', primary:['chest'], secondary:['triceps','shoulders'], equipment:'bodyweight', type:'compound' },
  { id:'chest_press_machine', name:'Chest Press Machine', primary:['chest'], secondary:['shoulders','triceps'], equipment:'machine', type:'compound' },
  { id:'pec_deck_machine', name:'Pec Deck Machine', primary:['chest'], secondary:['shoulders'], equipment:'machine', type:'isolation' },
  { id:'incline_dumbbell_press', name:'Incline Dumbbell Press', primary:['chest'], secondary:['shoulders','triceps'], equipment:'dumbbell', type:'compound' },
  { id:'cable_crossover', name:'Cable Crossover', primary:['chest'], secondary:['shoulders'], equipment:'cable', type:'isolation' },
  { id:'dumbbell_bench_press', name:'Dumbbell Bench Press', primary:['chest'], secondary:['shoulders','triceps'], equipment:'dumbbell', type:'compound' },
  { id:'incline_cable_fly', name:'Incline Cable Fly', primary:['chest'], secondary:['shoulders'], equipment:'cable', type:'isolation' },
  { id:'decline_push_up', name:'Decline Push Up', primary:['chest'], secondary:['shoulders','triceps'], equipment:'bodyweight', type:'compound' },
  { id:'incline_push_up', name:'Incline Push Up', primary:['chest'], secondary:['shoulders','triceps'], equipment:'bodyweight', type:'compound' },
  { id:'dumbbell_pullover', name:'Dumbbell Pullover', primary:['chest','lats'], secondary:['triceps'], equipment:'dumbbell', type:'compound' },
  // ---- BACK ----
  { id:'deadlift', name:'Deadlift', primary:['back','hamstrings','glutes'], secondary:['traps','forearms','lats'], equipment:'barbell', type:'compound' },
  { id:'bent_over_row', name:'Bent Over Row', primary:['back','lats'], secondary:['biceps','traps'], equipment:'barbell', type:'compound' },
  { id:'pull_up', name:'Pull Up', primary:['lats','back'], secondary:['biceps','forearms'], equipment:'bodyweight', type:'compound' },
  { id:'chin_up', name:'Chin Up', primary:['lats','back'], secondary:['biceps'], equipment:'bodyweight', type:'compound' },
  { id:'lat_pulldown', name:'Lat Pulldown', primary:['lats'], secondary:['biceps','back'], equipment:'cable', type:'compound' },
  { id:'seated_cable_row', name:'Seated Cable Row', primary:['back','lats'], secondary:['biceps','traps'], equipment:'cable', type:'compound' },
  { id:'t_bar_row', name:'T-Bar Row', primary:['back','lats'], secondary:['biceps','traps'], equipment:'barbell', type:'compound' },
  { id:'single_arm_dumbbell_row', name:'Single Arm Dumbbell Row', primary:['back','lats'], secondary:['biceps'], equipment:'dumbbell', type:'compound' },
  { id:'face_pull', name:'Face Pull', primary:['shoulders','traps'], secondary:['back'], equipment:'cable', type:'isolation' },
  { id:'hyperextension', name:'Hyperextension', primary:['back'], secondary:['glutes','hamstrings'], equipment:'bodyweight', type:'isolation' },
  { id:'rack_pull', name:'Rack Pull', primary:['back','traps'], secondary:['glutes','hamstrings','forearms'], equipment:'barbell', type:'compound' },
  { id:'pendlay_row', name:'Pendlay Row', primary:['back','lats'], secondary:['biceps','traps'], equipment:'barbell', type:'compound' },
  { id:'wide_grip_pulldown', name:'Wide Grip Lat Pulldown', primary:['lats'], secondary:['biceps','back'], equipment:'cable', type:'compound' },
  { id:'close_grip_pulldown', name:'Close Grip Pulldown', primary:['lats','back'], secondary:['biceps'], equipment:'cable', type:'compound' },
  { id:'machine_row', name:'Machine Row', primary:['back','lats'], secondary:['biceps'], equipment:'machine', type:'compound' },
  { id:'inverted_row', name:'Inverted Row', primary:['back','lats'], secondary:['biceps'], equipment:'bodyweight', type:'compound' },
  { id:'straight_arm_pulldown', name:'Straight Arm Pulldown', primary:['lats'], secondary:['back'], equipment:'cable', type:'isolation' },
  { id:'chest_supported_row', name:'Chest Supported Row', primary:['back','lats'], secondary:['traps','biceps'], equipment:'dumbbell', type:'compound' },
  // ---- SHOULDERS ----
  { id:'overhead_press', name:'Overhead Press', primary:['shoulders'], secondary:['triceps','traps'], equipment:'barbell', type:'compound' },
  { id:'dumbbell_shoulder_press', name:'Dumbbell Shoulder Press', primary:['shoulders'], secondary:['triceps'], equipment:'dumbbell', type:'compound' },
  { id:'lateral_raise', name:'Lateral Raise', primary:['shoulders'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'front_raise', name:'Front Raise', primary:['shoulders'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'rear_delt_fly', name:'Rear Delt Fly', primary:['shoulders'], secondary:['traps'], equipment:'dumbbell', type:'isolation' },
  { id:'cable_lateral_raise', name:'Cable Lateral Raise', primary:['shoulders'], secondary:[], equipment:'cable', type:'isolation' },
  { id:'arnold_press', name:'Arnold Press', primary:['shoulders'], secondary:['triceps'], equipment:'dumbbell', type:'compound' },
  { id:'upright_row', name:'Upright Row', primary:['shoulders','traps'], secondary:['biceps'], equipment:'barbell', type:'compound' },
  { id:'machine_shoulder_press', name:'Machine Shoulder Press', primary:['shoulders'], secondary:['triceps'], equipment:'machine', type:'compound' },
  { id:'cable_face_pull', name:'Cable Face Pull', primary:['shoulders','traps'], secondary:['back'], equipment:'cable', type:'isolation' },
  { id:'reverse_pec_deck', name:'Reverse Pec Deck', primary:['shoulders'], secondary:['traps'], equipment:'machine', type:'isolation' },
  { id:'seated_dumbbell_press', name:'Seated Dumbbell Press', primary:['shoulders'], secondary:['triceps'], equipment:'dumbbell', type:'compound' },
  { id:'landmine_press', name:'Landmine Press', primary:['shoulders'], secondary:['triceps','chest'], equipment:'barbell', type:'compound' },
  { id:'band_pull_apart', name:'Band Pull Apart', primary:['shoulders','traps'], secondary:['back'], equipment:'bands', type:'isolation' },
  { id:'cable_upright_row', name:'Cable Upright Row', primary:['shoulders','traps'], secondary:['biceps'], equipment:'cable', type:'compound' },
  // ---- BICEPS ----
  { id:'barbell_curl', name:'Barbell Curl', primary:['biceps'], secondary:['forearms'], equipment:'barbell', type:'isolation' },
  { id:'dumbbell_curl', name:'Dumbbell Curl', primary:['biceps'], secondary:['forearms'], equipment:'dumbbell', type:'isolation' },
  { id:'hammer_curl', name:'Hammer Curl', primary:['biceps','forearms'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'preacher_curl', name:'Preacher Curl', primary:['biceps'], secondary:['forearms'], equipment:'barbell', type:'isolation' },
  { id:'cable_curl', name:'Cable Curl', primary:['biceps'], secondary:['forearms'], equipment:'cable', type:'isolation' },
  { id:'incline_dumbbell_curl', name:'Incline Dumbbell Curl', primary:['biceps'], secondary:['forearms'], equipment:'dumbbell', type:'isolation' },
  { id:'concentration_curl', name:'Concentration Curl', primary:['biceps'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'ez_bar_curl', name:'EZ Bar Curl', primary:['biceps'], secondary:['forearms'], equipment:'barbell', type:'isolation' },
  { id:'spider_curl', name:'Spider Curl', primary:['biceps'], secondary:[], equipment:'barbell', type:'isolation' },
  { id:'cable_hammer_curl', name:'Cable Hammer Curl', primary:['biceps','forearms'], secondary:[], equipment:'cable', type:'isolation' },
  { id:'machine_curl', name:'Machine Curl', primary:['biceps'], secondary:[], equipment:'machine', type:'isolation' },
  { id:'band_curl', name:'Band Curl', primary:['biceps'], secondary:['forearms'], equipment:'bands', type:'isolation' },
  { id:'machine_preacher_curl', name:'Machine Preacher Curl', primary:['biceps'], secondary:[], equipment:'machine', type:'isolation' },
  // ---- TRICEPS ----
  { id:'tricep_dips', name:'Tricep Dips', primary:['triceps'], secondary:['chest','shoulders'], equipment:'bodyweight', type:'compound' },
  { id:'close_grip_bench_press', name:'Close Grip Bench Press', primary:['triceps'], secondary:['chest','shoulders'], equipment:'barbell', type:'compound' },
  { id:'skull_crusher', name:'Skull Crusher', primary:['triceps'], secondary:[], equipment:'barbell', type:'isolation' },
  { id:'tricep_pushdown', name:'Tricep Pushdown', primary:['triceps'], secondary:[], equipment:'cable', type:'isolation' },
  { id:'overhead_tricep_extension', name:'Overhead Tricep Extension', primary:['triceps'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'diamond_push_up', name:'Diamond Push Up', primary:['triceps'], secondary:['chest','shoulders'], equipment:'bodyweight', type:'compound' },
  { id:'tricep_kickback', name:'Kickback', primary:['triceps'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'cable_overhead_extension', name:'Cable Overhead Extension', primary:['triceps'], secondary:[], equipment:'cable', type:'isolation' },
  { id:'jm_press', name:'JM Press', primary:['triceps'], secondary:['chest'], equipment:'barbell', type:'compound' },
  { id:'rope_pushdown', name:'Rope Pushdown', primary:['triceps'], secondary:[], equipment:'cable', type:'isolation' },
  { id:'bench_dip', name:'Bench Dip', primary:['triceps'], secondary:['shoulders'], equipment:'bodyweight', type:'compound' },
  { id:'machine_tricep_extension', name:'Machine Tricep Extension', primary:['triceps'], secondary:[], equipment:'machine', type:'isolation' },
  // ---- QUADS ----
  { id:'squat', name:'Squat', primary:['quads'], secondary:['glutes','hamstrings','core'], equipment:'barbell', type:'compound' },
  { id:'front_squat', name:'Front Squat', primary:['quads'], secondary:['glutes','core'], equipment:'barbell', type:'compound' },
  { id:'leg_press', name:'Leg Press', primary:['quads'], secondary:['glutes','hamstrings'], equipment:'machine', type:'compound' },
  { id:'hack_squat', name:'Hack Squat', primary:['quads'], secondary:['glutes'], equipment:'machine', type:'compound' },
  { id:'lunge', name:'Lunge', primary:['quads','glutes'], secondary:['hamstrings'], equipment:'dumbbell', type:'compound' },
  { id:'bulgarian_split_squat', name:'Bulgarian Split Squat', primary:['quads','glutes'], secondary:['hamstrings'], equipment:'dumbbell', type:'compound' },
  { id:'step_up', name:'Step Up', primary:['quads','glutes'], secondary:['hamstrings'], equipment:'dumbbell', type:'compound' },
  { id:'leg_extension', name:'Leg Extension', primary:['quads'], secondary:[], equipment:'machine', type:'isolation' },
  { id:'goblet_squat', name:'Goblet Squat', primary:['quads','glutes'], secondary:['core'], equipment:'kettlebell', type:'compound' },
  { id:'sissy_squat', name:'Sissy Squat', primary:['quads'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'walking_lunge', name:'Walking Lunge', primary:['quads','glutes'], secondary:['hamstrings'], equipment:'dumbbell', type:'compound' },
  { id:'box_squat', name:'Box Squat', primary:['quads','glutes'], secondary:['hamstrings'], equipment:'barbell', type:'compound' },
  { id:'pistol_squat', name:'Pistol Squat', primary:['quads','glutes'], secondary:['core'], equipment:'bodyweight', type:'compound' },
  { id:'smith_machine_squat', name:'Smith Machine Squat', primary:['quads'], secondary:['glutes'], equipment:'machine', type:'compound' },
  { id:'zercher_squat', name:'Zercher Squat', primary:['quads','glutes'], secondary:['core','back'], equipment:'barbell', type:'compound' },
  // ---- HAMSTRINGS / GLUTES ----
  { id:'romanian_deadlift', name:'Romanian Deadlift', primary:['hamstrings','glutes'], secondary:['back'], equipment:'barbell', type:'compound' },
  { id:'nordic_curl', name:'Nordic Curl', primary:['hamstrings'], secondary:['glutes'], equipment:'bodyweight', type:'isolation' },
  { id:'leg_curl', name:'Leg Curl', primary:['hamstrings'], secondary:[], equipment:'machine', type:'isolation' },
  { id:'hip_thrust', name:'Hip Thrust', primary:['glutes'], secondary:['hamstrings'], equipment:'barbell', type:'compound' },
  { id:'glute_bridge', name:'Glute Bridge', primary:['glutes'], secondary:['hamstrings'], equipment:'bodyweight', type:'isolation' },
  { id:'cable_kickback', name:'Cable Kickback', primary:['glutes'], secondary:['hamstrings'], equipment:'cable', type:'isolation' },
  { id:'sumo_deadlift', name:'Sumo Deadlift', primary:['glutes','hamstrings'], secondary:['back','quads','traps'], equipment:'barbell', type:'compound' },
  { id:'good_morning', name:'Good Morning', primary:['hamstrings'], secondary:['glutes','back'], equipment:'barbell', type:'compound' },
  { id:'single_leg_romanian_deadlift', name:'Single Leg Romanian Deadlift', primary:['hamstrings','glutes'], secondary:['back','core'], equipment:'dumbbell', type:'compound' },
  { id:'reverse_hyper', name:'Reverse Hyper', primary:['glutes','hamstrings'], secondary:['back'], equipment:'machine', type:'isolation' },
  { id:'seated_leg_curl', name:'Seated Leg Curl', primary:['hamstrings'], secondary:[], equipment:'machine', type:'isolation' },
  { id:'cable_pull_through', name:'Cable Pull Through', primary:['glutes','hamstrings'], secondary:['back'], equipment:'cable', type:'compound' },
  { id:'frog_pump', name:'Frog Pump', primary:['glutes'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'banded_glute_kickback', name:'Banded Kickback', primary:['glutes'], secondary:['hamstrings'], equipment:'bands', type:'isolation' },
  { id:'glute_ham_raise', name:'Glute Ham Raise', primary:['hamstrings','glutes'], secondary:['back'], equipment:'machine', type:'compound' },
  { id:'hip_abduction_machine', name:'Hip Abduction Machine', primary:['glutes'], secondary:[], equipment:'machine', type:'isolation' },
  // ---- CALVES ----
  { id:'calf_raise_machine', name:'Calf Raise Machine', primary:['calves'], secondary:[], equipment:'machine', type:'isolation' },
  { id:'standing_calf_raise', name:'Standing Calf Raise', primary:['calves'], secondary:[], equipment:'barbell', type:'isolation' },
  { id:'seated_calf_raise', name:'Seated Calf Raise', primary:['calves'], secondary:[], equipment:'machine', type:'isolation' },
  { id:'donkey_calf_raise', name:'Donkey Calf Raise', primary:['calves'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'single_leg_calf_raise', name:'Single Leg Calf Raise', primary:['calves'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'dumbbell_calf_raise', name:'Dumbbell Calf Raise', primary:['calves'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'leg_press_calf_raise', name:'Leg Press Calf Raise', primary:['calves'], secondary:[], equipment:'machine', type:'isolation' },
  // ---- CORE ----
  { id:'plank', name:'Plank', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'crunch', name:'Crunch', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'sit_up', name:'Sit Up', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'leg_raise', name:'Leg Raise', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'russian_twist', name:'Russian Twist', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'ab_wheel_rollout', name:'Ab Wheel Rollout', primary:['core'], secondary:['shoulders','lats'], equipment:'bodyweight', type:'compound' },
  { id:'cable_crunch', name:'Cable Crunch', primary:['core'], secondary:[], equipment:'cable', type:'isolation' },
  { id:'hanging_leg_raise', name:'Hanging Leg Raise', primary:['core'], secondary:['forearms'], equipment:'bodyweight', type:'isolation' },
  { id:'side_plank', name:'Side Plank', primary:['core'], secondary:['shoulders'], equipment:'bodyweight', type:'isolation' },
  { id:'dragon_flag', name:'Dragon Flag', primary:['core'], secondary:[], equipment:'bodyweight', type:'compound' },
  { id:'pallof_press', name:'Pallof Press', primary:['core'], secondary:['shoulders'], equipment:'cable', type:'isolation' },
  { id:'hollow_body_hold', name:'Hollow Body Hold', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'bicycle_crunch', name:'Bicycle Crunch', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'v_up', name:'V-Up', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'cable_woodchopper', name:'Cable Woodchopper', primary:['core'], secondary:['shoulders'], equipment:'cable', type:'isolation' },
  { id:'decline_sit_up', name:'Decline Sit Up', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'flutter_kicks', name:'Flutter Kicks', primary:['core'], secondary:[], equipment:'bodyweight', type:'isolation' },
  { id:'ab_crunch_machine', name:'Ab Crunch Machine', primary:['core'], secondary:[], equipment:'machine', type:'isolation' },
  // ---- TRAPS ----
  { id:'shrug', name:'Shrug', primary:['traps'], secondary:['forearms'], equipment:'barbell', type:'isolation' },
  { id:'dumbbell_shrug', name:'Dumbbell Shrug', primary:['traps'], secondary:['forearms'], equipment:'dumbbell', type:'isolation' },
  { id:'cable_shrug', name:'Cable Shrug', primary:['traps'], secondary:['forearms'], equipment:'cable', type:'isolation' },
  { id:'power_clean', name:'Power Clean', primary:['traps','back'], secondary:['quads','glutes','shoulders'], equipment:'barbell', type:'compound' },
  { id:'trap_bar_shrug', name:'Trap Bar Shrug', primary:['traps'], secondary:['forearms'], equipment:'barbell', type:'isolation' },
  { id:'farmers_walk', name:"Farmer's Walk", primary:['traps','forearms'], secondary:['core'], equipment:'dumbbell', type:'compound' },
  // ---- FOREARMS ----
  { id:'wrist_curl', name:'Wrist Curl', primary:['forearms'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'reverse_wrist_curl', name:'Reverse Wrist Curl', primary:['forearms'], secondary:[], equipment:'dumbbell', type:'isolation' },
  { id:'reverse_curl', name:'Reverse Curl', primary:['forearms','biceps'], secondary:[], equipment:'barbell', type:'isolation' },
  { id:'wrist_roller', name:'Wrist Roller', primary:['forearms'], secondary:[], equipment:'bodyweight', type:'isolation' },
  // ---- COMPOUND / FULL BODY ----
  { id:'clean_and_press', name:'Clean and Press', primary:['shoulders','traps'], secondary:['quads','glutes','back'], equipment:'barbell', type:'compound' },
  { id:'thruster', name:'Thruster', primary:['quads','shoulders'], secondary:['glutes','triceps'], equipment:'barbell', type:'compound' },
  { id:'kettlebell_swing', name:'Kettlebell Swing', primary:['glutes','hamstrings'], secondary:['back','shoulders','core'], equipment:'kettlebell', type:'compound' },
  { id:'turkish_get_up', name:'Turkish Get Up', primary:['core','shoulders'], secondary:['glutes','quads'], equipment:'kettlebell', type:'compound' },
  { id:'burpee', name:'Burpee', primary:['quads','chest'], secondary:['core','shoulders','triceps'], equipment:'bodyweight', type:'compound' },
  { id:'mountain_climber', name:'Mountain Climber', primary:['core'], secondary:['quads','shoulders'], equipment:'bodyweight', type:'compound' },
  { id:'bear_crawl', name:'Bear Crawl', primary:['core','shoulders'], secondary:['quads'], equipment:'bodyweight', type:'compound' },
  { id:'snatch', name:'Snatch', primary:['shoulders','traps'], secondary:['back','quads','glutes'], equipment:'barbell', type:'compound' },
  { id:'wall_ball', name:'Wall Ball', primary:['quads','shoulders'], secondary:['glutes','core'], equipment:'bodyweight', type:'compound' },
  { id:'kettlebell_clean', name:'Kettlebell Clean', primary:['traps','shoulders'], secondary:['back','glutes'], equipment:'kettlebell', type:'compound' },
];

module.exports = { EXERCISE_CATALOGUE };
