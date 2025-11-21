# Roadmap: Equipment Capacity, Storage, and Selling Patch

A refreshed core loop that revolves around harvesting logistics: fill harvester tanks, shuttle grain with wagons and semi-trucks, stash crops in silos to dry for bonuses, then haul to the far-off grain elevator to cash in.

## Phase 1 – Equipment Capacity

### 1.1 Tractor Wagons
Wagons that can be drawn by a tractor can be used for:
- Empty the harvester when its tank is full so the harvester can keep moving.
- Move harvest to silo or sellpoint, acting as a mid-capacity shuttle.
- Can empty/load from: harvester / semi-truck / silo / sellpoint.
- Multiple wagons can line up at the same unload point; filling and emptying takes time to encourage planning.

### 1.2 Harvesters
- Each harvester has a tank that fills while harvesting; when full, it stops until emptied.
- Can empty tank to: wagons / semi-truck / silo / sellpoint.
- Works best when paired with nearby wagons or semi-trucks so the field work never stalls.

### 1.3 Silos and Sellingpoint
For harvest storage and selling:
- Use wagon or semi-truck to move grain to the silo for storage (yields a bonus once dried).
- The "grain elevator" is the sellpoint; dried grain (stored long enough in a silo) sells for the best price, while fresh grain sells at a penalty.
- Will be placed at a far distance from the starting square (edge or corner) by default so logistics matter; can be moved when designing the final map.
- Multiple equipment can queue to unload/sell at the same building, and filling/emptying takes time.
- In future updates: store the harvest until market prices peak to maximize profits.

### 1.4 Semi-trucks
- High-capacity haulers that double as field storage while harvesting.
- Reduce tractor trips by hauling large loads between field, silo, and sellpoint.
- Can empty/load from: harvester / wagons / silo / sellpoint.

## Running tests locally

The in-game regression tests run inside the browser so they can exercise the full loop (saving, drying, hauling, harvesting).

1. Install Playwright and browsers: `npm install` then `npx playwright install chromium`.
2. Launch the automated runner: `npm test`.
3. To view the tests in a browser tab, simply open `farming_rts_v1.html` and watch the Debug/Tests panel.

## Phase 2 – Constructions
Build your ultimate farmstead in the land immediately surrounding the farmhouse.
- Garages, silos, roads can be built for money and demolished for a cost.
- Use buildings to store equipment and crops.

## Phase 3 – Animals
Barn for housing livestock, storing crops and equipment, and carrying out farm-related processes.

# Pictures from the game Phase.0 - 11-11-2025
<img width="1688" height="834" alt="image" src="https://github.com/user-attachments/assets/27517750-a279-466d-be54-9d54acda701a" />

<img width="1655" height="760" alt="image" src="https://github.com/user-attachments/assets/3b29c650-811c-4f33-87a9-4a67ba0ccdfb" />
