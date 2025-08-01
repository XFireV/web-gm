// --- Game Data ---
document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const mapArea = document.getElementById('map-area');
  const mapInnerContent = document.getElementById('map-inner-content');
  const gameMapCanvas = document.getElementById('game-map');
  const ctx = gameMapCanvas.getContext('2d');
  const battleArea = document.getElementById('battle-area');
  const monsterNameEl = document.getElementById('monster-name');
  const monsterHpEl = document.getElementById('monster-hp');
  const playerHpEl = document.getElementById('player-hp');
  const battleLogEl = document.getElementById('battle-log');
  const attackButton = document.getElementById('attack-button');
  const fleeButton = document.getElementById('flee-button');
  const resetButton = document.getElementById('reset-game-button');

  // Resource gathering elements
  const resourceGatheringArea = document.getElementById('resource-gathering-area');
  const gatheringTitle = document.getElementById('gathering-title');
  const currentResourceName = document.getElementById('current-resource-name');
  const resourceHp = document.getElementById('resource-hp');
  const currentTool = document.getElementById('current-tool');
  const resourceGatheringCanvas = document.getElementById('resource-gathering-canvas');
  const resourceCtx = resourceGatheringCanvas.getContext('2d');
  const gatheringLog = document.getElementById('gathering-log');
  const stopGatheringButton = document.getElementById('stop-gathering-button');

  // Castle conquest elements
  const castleConquestArea = document.getElementById('castle-conquest-area');
  const castleNameEl = document.getElementById('castle-name');
  const castleOwnerEl = document.getElementById('castle-owner');
  const conquestProgressEl = document.getElementById('conquest-progress');
  const conquestTimeEl = document.getElementById('conquest-time');
  const castleLogEl = document.getElementById('castle-log');
  const startConquestButton = document.getElementById('start-conquest-button');
  const stopConquestButton = document.getElementById('stop-conquest-button');
  const leaveCastleButton = document.getElementById('leave-castle-button');

  // Name and class modals
  const nameModal = document.getElementById('name-modal');
  const playerNameInput = document.getElementById('player-name-input');
  const startGameButton = document.getElementById('start-game-button');
  const classModal = document.getElementById('class-modal');
  const classOptions = document.querySelectorAll('.class-option');
  const selectClassButton = document.getElementById('select-class-button');
  const cancelClassButton = document.getElementById('cancel-class-button');
  const chooseClassButton = document.getElementById('choose-class-button');
  const classSelectionArea = document.getElementById('class-selection-area');

  // Profession modal
  const professionModal = document.getElementById('profession-modal');
  const professionSelection = document.getElementById('profession-selection');
  const selectProfessionButton = document.getElementById('select-profession-button');
  const cancelProfessionButton = document.getElementById('cancel-profession-button');

  // Global events
  const globalEventsBanner = document.getElementById('global-events-banner');
  const eventText = document.getElementById('event-text');
  const closeEventBanner = document.getElementById('close-event-banner');

  // Location modal
  const locationModal = document.getElementById('location-modal');
  const locationNameEl = document.getElementById('location-name');
  const locationDescriptionEl = document.getElementById('location-description');
  const locationResourcesEl = document.getElementById('location-resources');
  const castleTerritoryInfo = document.getElementById('castle-territory-info');
  const territoryOwnerEl = document.getElementById('territory-owner');
  const territoryResourcesEl = document.getElementById('territory-resources');
  const locationExperienceInfoEl = document.getElementById('location-experience-info');
  const monsterInfoSectionEl = document.getElementById('monster-info-section');
  const lootInfoSectionEl = document.getElementById('loot-info-section');
  const resourceInfoSectionEl = document.getElementById('resource-info-section');
  const travelToLocationButton = document.getElementById('travel-to-location');
  const enterLocationButton = document.getElementById('enter-location');
  const activeHuntButton = document.getElementById('active-hunt-button');
  const passiveHuntButton = document.getElementById('passive-hunt-button');
  const activeGatherButton = document.getElementById('active-gather-button');
  const castleInfoButton = document.getElementById('castle-info-button');
  const cancelLocationButton = document.getElementById('cancel-location');

  // Stats modal
  const statsModal = document.getElementById('stats-modal');
  const playerNameDisplay = document.getElementById('player-name-display');
  const playerClassDisplay = document.getElementById('player-class');
  const playerProfessionDisplay = document.getElementById('player-profession');
  const playerLevelEl = document.getElementById('player-level');
  const playerExpEl = document.getElementById('player-exp');
  const playerExpNextLevelEl = document.getElementById('player-exp-next-level');
  const playerSkillPointsEl = document.getElementById('player-skill-points');
  const playerStatsHpEl = document.getElementById('player-stats-hp');
  const playerStatsDamageEl = document.getElementById('player-stats-damage');
  const playerStatsDefenseEl = document.getElementById('player-stats-defense');
  const playerStatsGoldEl = document.getElementById('player-stats-gold');
  const playerCurrentWeightEl = document.getElementById('player-current-weight');
  const playerMaxWeightEl = document.getElementById('player-max-weight');
  const weightDisplayEl = document.getElementById('weight-display');
  const playerFatigueEl = document.getElementById('player-fatigue');
  const attrStrengthEl = document.getElementById('attr-strength');
  const attrResistanceEl = document.getElementById('attr-resistance');
  const attrAgilityEl = document.getElementById('attr-agility');
  const attrIntelligenceEl = document.getElementById('attr-intelligence');
  const addAttributeButtons = document.querySelectorAll('.add-attribute-button');
  const equippedWeaponDisplay = document.getElementById('equipped-weapon-display');
  const equippedArmorDisplay = document.getElementById('equipped-armor-display');
  const weaponSkillsSection = document.getElementById('weapon-skills-section');
  const gatheringSkillsSection = document.getElementById('gathering-skills-section');

  // Inventory modal
  const inventoryModal = document.getElementById('inventory-modal');
  const inventoryListEl = document.getElementById('inventory-list');
  const inventoryCurrentWeightEl = document.getElementById('inventory-current-weight');
  const inventoryMaxWeightEl = document.getElementById('inventory-max-weight');
  const inventoryWeightDisplayEl = document.getElementById('inventory-weight-display');
  const itemDetailsEl = document.getElementById('item-details');
  const detailItemNameEl = document.getElementById('detail-item-name');
  const detailItemRarityEl = document.getElementById('detail-item-rarity');
  const detailItemWeightEl = document.getElementById('detail-item-weight');
  const detailItemDescriptionEl = document.getElementById('detail-item-description');
  const detailItemQuantityEl = document.getElementById('detail-item-quantity');
  const detailItemEffectsEl = document.getElementById('detail-item-effects');
  const actionQuantityInput = document.getElementById('action-quantity');
  const useItemButton = document.getElementById('use-item-button');
  const discardItemButton = document.getElementById('discard-item-button');
  const equipItemButton = document.getElementById('equip-item-button');
  const cancelItemActionButton = document.getElementById('cancel-item-action');

  // Shop modal
  const shopModal = document.getElementById('shop-modal');
  const shopItemsListEl = document.getElementById('shop-items-list');
  const restButton = document.getElementById('rest-button');

  // Crafting modal
  const craftingModal = document.getElementById('crafting-modal');
  const categoryButtons = document.querySelectorAll('.category-button');
  const recipeList = document.getElementById('recipe-list');
  const recipeDetails = document.getElementById('recipe-details');
  const recipeName = document.getElementById('recipe-name');
  const recipeDescription = document.getElementById('recipe-description');
  const requiredMaterials = document.getElementById('required-materials');
  const requiredSkills = document.getElementById('required-skills');
  const recipeSkillRequirements = document.getElementById('recipe-skill-requirements');
  const craftingTimeInfo = document.getElementById('crafting-time-info');
  const craftingTimeEl = document.getElementById('crafting-time');
  const craftItemButton = document.getElementById('craft-item-button');
  const activeCrafts = document.getElementById('active-crafts');
  const craftingQueue = document.getElementById('crafting-queue');

  // Passive farm modal
  const passiveFarmModal = document.getElementById('passive-farm-modal');
  const passiveFarmTitle = document.getElementById('passive-farm-title');
  const passiveFarmLog = document.getElementById('passive-farm-log');
  const passiveFarmFatigue = document.getElementById('passive-farm-fatigue');
  const passiveFarmHours = document.getElementById('passive-farm-hours');
  const realTimeElapsed = document.getElementById('real-time-elapsed');
  const nextUpdateCountdown = document.getElementById('next-update-countdown');
  const startPassiveFarmButton = document.getElementById('start-passive-farm-button');
  const stopPassiveFarmButton = document.getElementById('stop-passive-farm-button');
  const closePassiveFarmButton = document.getElementById('close-passive-farm-button');
  const passiveFarmResults = document.getElementById('passive-farm-results');
  const levelupResults = document.getElementById('levelup-results');
  const farmGoldGained = document.getElementById('farm-gold-gained');
  const farmExpGained = document.getElementById('farm-exp-gained');
  const farmItemsCollected = document.getElementById('farm-items-collected');

  // World status display
  const worldDayEl = document.getElementById('world-day');
  const worldSeasonEl = document.getElementById('world-season');
  const worldWeatherEl = document.getElementById('world-weather');
  const worldPhaseEl = document.getElementById('world-phase');
  const gameTimeEl = document.getElementById('game-time');

  // Close buttons
  const closeButtons = document.querySelectorAll('.close-button');
    let player = {
        name: '',
        class: null,
        hp: 150,
        maxHp: 150,
        strength: 2,
        resistance: 10,
        agility: 1,
        intelligence: 1,
        minDamage: 10,
        maxDamage: 10,
        defense: 0,
        gold: 0,
        isAlive: true,
        inventory: [],
        currentWeight: 0,
        maxWeight: 50.0,
        level: 1,
        exp: 5000,
        expToNextLevel: 100,
        skillPoints: 0,
        fatigue: 0,
        fatiguePerTravel: 5,
        fatiguePerBattle: 10,
        restFatigueReduction: 50,
        restCost: 10,
        equippedWeapon: null,
        equippedArmor: null,
        activeEffects: [],
        currentLocationId: 'start_village',
        isTraveling: false,
        travelArrow: {
            startPoi: null,
            endPoi: null,
            progress: 0,
            duration: 0,
            startTime: 0
        },
        selectedInventoryItem: null,
        isPassiveFarming: false,
        passiveFarmData: {
            poiId: null,
            startTime: 0,
            lastUpdateTime: 0,
            hoursFarmed: 0,
            totalExpGained: 0,
            totalGoldGained: 0,
            itemsCollected: {},
            initialPlayerLevel: 1,
            levelUpsDuringFarm: 0,
        },
        locationExperience: {},
        weaponSkills: {},
        gatheringSkills: {},
        knownRecipes: [],
        activeCrafts: [],
        ownedCastles: [],
        ownedLocations: [],
        isConqueringCastle: false,
        conquestData: {
            castleId: null,
            startTime: 0,
            progress: 0
        },
        guild: null,
        ownedGuild: null,
        profession: null
    };

    let currentMonster = null;
    let currentPoiLevel = 1;
    let travelAnimationFrameId = null;
    let attackTimeoutId = null;
    let passiveFarmInterval = null;
    let gameTimeInterval = null;
    let selectedLocationId = null;
    let currentGatheringResource = null;
    let gatheringPoints = [];
    let gatheringInterval = null;
    let selectedRecipe = null;
    let selectedClass = null;
    let globalEvents = [];
    let activeEvent = null;
    let currentSkillTooltip = null;

    // Game state variables
    let scale = 1.0;
    let offsetX = 0;
    let offsetY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isDragging = false;
    const maxScale = 4.0;
    const minScale = 0.5;

    // Day/Night and Weather System
    let gameTime = {
        dayStartTime: Date.now(),
        cycleDuration: 160 * 60 * 1000, // 2h40min in milliseconds
        currentPhase: 'day', // 'day', 'night'
        weather: 'clear', // 'clear', 'rain'
        weatherChangeTime: Date.now(),
        lastPhaseCheck: Date.now(),
        startTime: Date.now(),
        currentHour: 6, // Start at 6 AM
        minutesPerRealSecond: 4 // 4 game minutes per real second (24 hours = 6 real hours)
    };

    // Guild System
    let guilds = {};
    let maxPlayerLocations = 2;
    let maxGuildLocations = 10;

    // World Season System
    let worldTime = {
        creationDate: Date.now(),
        currentSeason: 'spring',
        seasonStartTime: Date.now(),
        seasonDuration: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        daysSinceCreation: 1
    };

    // Profession System
    const PROFESSIONS = {
        lenhador: {
            name: 'Lenhador',
            icon: '🪓',
            requiredSkill: 'woodcutting',
            gatheringBonus: 2.0,
            description: 'Especialista em corte de madeira'
        },
        construtor: {
            name: 'Construtor',
            icon: '🔨',
            requiredSkill: 'construction',
            gatheringBonus: 1.5,
            description: 'Especialista em construção'
        },
        ferreiro: {
            name: 'Ferreiro',
            icon: '⚒️',
            requiredSkill: 'smithing',
            gatheringBonus: 1.8,
            description: 'Especialista em metalurgia e criação de armas'
        },
        alquimista: {
            name: 'Alquimista',
            icon: '⚗️',
            requiredSkill: 'alchemy',
            gatheringBonus: 1.6,
            description: 'Especialista em poções e alquimia'
        },
        mineiro: {
            name: 'Mineiro',
            icon: '⛏️',
            requiredSkill: 'mining',
            gatheringBonus: 2.2,
            description: 'Especialista em mineração'
        }
    };

    const SEASONS = {
        spring: { name: 'Primavera', icon: '🌸', events: ['flower_bloom', 'rain_season', 'magical_growth', 'spring_festival', 'pollen_storm', 'nature_blessing', 'green_tide'] },
        summer: { name: 'Verão', icon: '☀️', events: ['heat_wave', 'drought', 'solar_flare', 'desert_winds', 'fire_spirits', 'burning_skies', 'scorching_earth'] },
        autumn: { name: 'Outono', icon: '🍂', events: ['harvest_time', 'cold_winds', 'falling_leaves', 'harvest_moon', 'amber_rain', 'golden_hour', 'twilight_mist'] },
        winter: { name: 'Inverno', icon: '❄️', events: ['snow_storm', 'ice_age', 'aurora_borealis', 'frost_bite', 'crystal_formation', 'blizzard_fury', 'eternal_night'] }
    };

    // Guild Level Configuration
    const GUILD_LEVELS = {
        1: { goldRequired: 0, expBonus: 0, skillExpBonus: 0, gatheringExpBonus: 0 },
        2: { goldRequired: 1000, expBonus: 5, skillExpBonus: 5, gatheringExpBonus: 5 },
        3: { goldRequired: 2500, expBonus: 10, skillExpBonus: 10, gatheringExpBonus: 10 },
        4: { goldRequired: 5000, expBonus: 15, skillExpBonus: 15, gatheringExpBonus: 15 },
        5: { goldRequired: 10000, expBonus: 20, skillExpBonus: 20, gatheringExpBonus: 20 },
        6: { goldRequired: 20000, expBonus: 25, skillExpBonus: 25, gatheringExpBonus: 25 },
        7: { goldRequired: 35000, expBonus: 30, skillExpBonus: 30, gatheringExpBonus: 30 },
        8: { goldRequired: 55000, expBonus: 35, skillExpBonus: 35, gatheringExpBonus: 35 },
        9: { goldRequired: 80000, expBonus: 40, skillExpBonus: 40, gatheringExpBonus: 40 },
        10: { goldRequired: 120000, expBonus: 50, skillExpBonus: 50, gatheringExpBonus: 50 }
    };

    // Gathering Skills Configuration
    const GATHERING_SKILLS_CONFIG = {
        'woodcutting': {
            name: 'Corte de Madeira',
            description: 'Habilidade em cortar madeira',
            expToNextLevel: [0, 100, 250, 500, 1000, 1800, 2800, 4200, 6000, 8500, 11500, 15000, 19500, 25000, 32000, 40000],
            bonuses: {
                1: { description: '+10% velocidade de coleta', type: 'gathering_speed', value: 0.1 },
                3: { description: '+15% recursos coletados', type: 'resource_bonus', value: 0.15 },
                5: { description: '+20% velocidade de coleta', type: 'gathering_speed', value: 0.2 },
                10: { description: '+30% recursos coletados', type: 'resource_bonus', value: 0.3 },
                15: { description: 'Madeira rara ocasional', type: 'rare_resource', value: 0.1 }
            }
        },
        'mining': {
            name: 'Mineração',
            description: 'Habilidade em extrair minérios',
            expToNextLevel: [0, 100, 250, 500, 1000, 1800, 2800, 4200, 6000, 8500, 11500, 15000, 19500, 25000, 32000, 40000],
            bonuses: {
                1: { description: '+10% velocidade de mineração', type: 'gathering_speed', value: 0.1 },
                3: { description: '+15% minérios coletados', type: 'resource_bonus', value: 0.15 },
                5: { description: '+20% velocidade de mineração', type: 'gathering_speed', value: 0.2 },
                10: { description: '+30% minérios coletados', type: 'resource_bonus', value: 0.3 },
                15: { description: 'Gemas raras ocasionais', type: 'rare_resource', value: 0.1 }
            }
        },
        'fishing': {
            name: 'Pesca',
            description: 'Habilidade em pescar',
            expToNextLevel: [0, 100, 250, 500, 1000, 1800, 2800, 4200, 6000, 8500, 11500, 15000, 19500, 25000, 32000, 40000],
            bonuses: {
                1: { description: '+10% velocidade de pesca', type: 'gathering_speed', value: 0.1 },
                3: { description: '+15% peixes coletados', type: 'resource_bonus', value: 0.15 },
                5: { description: '+20% velocidade de pesca', type: 'gathering_speed', value: 0.2 },
                10: { description: '+30% peixes coletados', type: 'resource_bonus', value: 0.3 },
                15: { description: 'Peixes lendários ocasionais', type: 'rare_resource', value: 0.15 }
            }
        },
        'smithing': {
            name: 'Ferraria',
            description: 'Habilidade em trabalhar metais',
            expToNextLevel: [0, 100, 250, 500, 1000, 1800, 2800, 4200, 6000, 8500, 11500, 15000, 19500, 25000, 32000, 40000],
            bonuses: {
                1: { description: '+10% velocidade de criação', type: 'crafting_speed', value: 0.1 },
                3: { description: 'Economia de materiais (10%)', type: 'material_save', value: 0.1 },
                5: { description: '+20% velocidade de criação', type: 'crafting_speed', value: 0.2 },
                10: { description: 'Economia de materiais (20%)', type: 'material_save', value: 0.2 },
                15: { description: 'Chance de criar itens superiores', type: 'quality_bonus', value: 0.15 }
            }
        },
        'alchemy': {
            name: 'Alquimia',
            description: 'Habilidade em criar poções',
            expToNextLevel: [0, 100, 250, 500, 1000, 1800, 2800, 4200, 6000, 8500, 11500, 15000, 19500, 25000, 32000, 40000],
            bonuses: {
                1: { description: '+10% eficácia de poções', type: 'potion_power', value: 0.1 },
                3: { description: 'Economia de ingredientes (10%)', type: 'material_save', value: 0.1 },
                5: { description: '+20% eficácia de poções', type: 'potion_power', value: 0.2 },
                10: { description: 'Economia de ingredientes (20%)', type: 'material_save', value: 0.2 },
                15: { description: 'Chance de criar poções duplas', type: 'double_craft', value: 0.15 }
            }
        }
    };

    // Constants
    const ARROW_HEAD_SIZE = 15;
    const ARROW_WIDTH = 5;
    const RESTOCK_INTERVAL_MS = 24 * 60 * 60 * 1000;
    const REAL_HOUR_MS = 60 * 60 * 1000;
    const FARM_UPDATE_INTERVAL_MS = 5 * 60 * 1000;
    const CASTLE_CONQUEST_TIME_MS = 60 * 60 * 1000; // 1 hour
    const CAPITAL_CONQUEST_TIME_MS = 12 * 60 * 60 * 1000; // 12 hours
    const CASTLE_INCOME_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours

    // Player Classes Configuration
    const PLAYER_CLASSES = {
        warrior: {
            name: 'Guerreiro',
            icon: '🗡️',
            bonuses: {
                strength: 2,
                resistance: 1,
                meleeExpBonus: 0.2,
                damageReduction: 0.15
            }
        },
        archer: {
            name: 'Arqueiro',
            icon: '🏹',
            bonuses: {
                agility: 2,
                intelligence: 1,
                bowExpBonus: 0.25,
                critChanceBonus: 0.15
            }
        },
        crafter: {
            name: 'Criador',
            icon: '🔨',
            bonuses: {
                strength: 1,
                resistance: 1,
                agility: 1,
                intelligence: 1,
                gatheringExpBonus: 0.5,
                craftTimeReduction: 0.25,
                resourceBonus: 0.2
            }
        },
        mage: {
            name: 'Mago',
            icon: '🔮',
            bonuses: {
                intelligence: 3,
                statusEffectBonus: 0.25,
                healBonus: 0.3,
                statusResistance: 0.4
            }
        }
    };

    // Item Rarities
    const ITEM_RARITIES = {
        'common': { name: 'Comum', color: 'rarity-common', dropModifier: 1.0 },
        'uncommon': { name: 'Incomum', color: 'rarity-uncommon', dropModifier: 0.7 },
        'rare': { name: 'Raro', color: 'rarity-rare', dropModifier: 0.4 },
        'ultra-rare': { name: 'Ultra-raro', color: 'rarity-ultra-rare', dropModifier: 0.25 },
        'legendary': { name: 'Lendário', color: 'rarity-legendary', dropModifier: 0.1 },
        'epic': { name: 'Épico', color: 'rarity-epic', dropModifier: 0.05 },
        'mythic': { name: 'Mítico', color: 'rarity-mythic', dropModifier: 0.02 },
        'divine': { name: 'Divino', color: 'rarity-divine', dropModifier: 0.01 }
    };

    // Weapon Skills Configuration
    const WEAPON_SKILLS_CONFIG = {
        'swords': {
            name: 'Espadas',
            description: 'Maestria com espadas e lâminas',
            weapons: ['Espada Curta', 'Espada Longa', 'Espada de Ferro', 'Espada Élfica', 'Espada do Destino'],
            bonuses: {
                1: { description: '+5% de chance de crítico', type: 'crit_chance', value: 0.05 },
                3: { description: '+10% de dano', type: 'damage_bonus', value: 0.1 },
                5: { description: '+15% de chance de crítico', type: 'crit_chance', value: 0.15 },
                10: { description: 'Críticos causam sangramento', type: 'crit_bleed', value: true },
                15: { description: '+25% de dano crítico', type: 'crit_damage', value: 0.25 }
            }
        },
        'bows': {
            name: 'Arcos',
            description: 'Precisão com arcos e bestas',
            weapons: ['Arco Curto', 'Arco Élfico', 'Besta Pesada'],
            bonuses: {
                1: { description: '+10% de chance de crítico', type: 'crit_chance', value: 0.1 },
                3: { description: '+15% de dano', type: 'damage_bonus', value: 0.15 },
                5: { description: '10% chance de economizar munição', type: 'ammo_save', value: 0.1 },
                10: { description: '+20% de chance de crítico', type: 'crit_chance', value: 0.2 },
                15: { description: 'Tiro triplo (33% chance)', type: 'triple_shot', value: 0.33 }
            }
        },
        'daggers': {
            name: 'Adagas',
            description: 'Velocidade e precisão com adagas',
            weapons: ['Adaga Afiada'],
            bonuses: {
                1: { description: '+15% de chance de crítico', type: 'crit_chance', value: 0.15 },
                3: { description: 'Golpes causam envenenamento (20% chance)', type: 'poison_chance', value: 0.2 },
                5: { description: '+30% de velocidade de ataque', type: 'attack_speed', value: 0.3 },
                10: { description: 'Golpes críticos reduzem cooldown', type: 'crit_cooldown', value: true },
                15: { description: 'Golpes furtivos (dobro do dano por atrás)', type: 'stealth_damage', value: 2.0 }
            }
        },
        'axes': {
            name: 'Machados',
            description: 'Força brutal com machados',
            weapons: ['Machado Enferrujado'],
            bonuses: {
                1: { description: '+15% de dano', type: 'damage_bonus', value: 0.15 },
                3: { description: 'Golpes causam sangramento (30% chance)', type: 'bleed_chance', value: 0.3 },
                5: { description: '+10% de chance de ignorar armadura', type: 'armor_ignore', value: 0.1 },
                10: { description: 'Golpes atingem múltiplos inimigos', type: 'cleave', value: true },
                15: { description: '+50% de dano crítico', type: 'crit_damage', value: 0.5 }
            }
        },
        'clubs': {
            name: 'Clavas',
            description: 'Impacto devastador com clavas',
            weapons: ['Clava Enorme'],
            bonuses: {
                1: { description: '+20% de chance de atordoar', type: 'stun_chance', value: 0.2 },
                3: { description: '+25% de dano contra armaduras', type: 'armor_damage', value: 0.25 },
                5: { description: 'Golpes reduzem defesa inimiga', type: 'defense_break', value: 0.15 },
                10: { description: 'Atordoamentos duram mais tempo', type: 'stun_duration', value: 2 },
                15: { description: 'Golpes sísmicos (dano em área)', type: 'earthquake', value: true }
            }
        },
        'spears': {
            name: 'Lanças',
            description: 'Alcance e perfuração com lanças',
            weapons: ['Lança de Caça'],
            bonuses: {
                1: { description: '+10% de alcance', type: 'range_bonus', value: 0.1 },
                3: { description: 'Contra-ataques automáticos', type: 'counter_attack', value: 0.25 },
                5: { description: '+15% de dano contra grandes inimigos', type: 'large_damage', value: 0.15 },
                10: { description: 'Investidas causam knockback', type: 'charge_knockback', value: true },
                15: { description: 'Perfura através de múltiplos inimigos', type: 'pierce_through', value: true }
            }
        },
        'staves': {
            name: 'Cajados',
            description: 'Canalização mágica com cajados',
            weapons: ['Cajado Sombrio', 'Varinha Mágica'],
            bonuses: {
                1: { description: '+25% de duração de efeitos mágicos', type: 'effect_duration', value: 0.25 },
                3: { description: '+20% de chance de efeitos de status', type: 'status_chance', value: 0.2 },
                5: { description: 'Regeneração de mana', type: 'mana_regen', value: 0.1 },
                10: { description: 'Efeitos mágicos se espalham', type: 'spell_spread', value: true },
                15: { description: 'Críticos causam explosões mágicas', type: 'magic_explosion', value: true }
            }
        }
    };

    // Gathering Skills Configuration (Enhanced with fishing)
    const GATHERING_SKILLS_CONFIG = {
        'lumberjack': {
            name: 'Lenhador',
            description: 'Habilidade de cortar madeira',
            expPerHour: 200,
            bonuses: {
                1: { description: '+10% velocidade de corte', type: 'gathering_speed', value: 0.1 },
                3: { description: '+15% chance de itens raros', type: 'rare_chance', value: 0.15 },
                5: { description: '+20% recursos obtidos', type: 'resource_bonus', value: 0.2 },
                10: { description: 'Pode cortar madeira especial', type: 'special_resources', value: true },
                15: { description: '+30% velocidade e recursos', type: 'master_gathering', value: 0.3 }
            }
        },
        'mining': {
            name: 'Mineração',
            description: 'Habilidade de mineração de recursos',
            expPerHour: 15,
            bonuses: {
                1: { description: '+10% velocidade de mineração', type: 'gathering_speed', value: 0.1 },
                3: { description: '+20% chance de gemas', type: 'rare_chance', value: 0.2 },
                5: { description: '+25% recursos coletados', type: 'resource_bonus', value: 0.25 },
                10: { description: 'Pode minerar metais preciosos', type: 'special_resources', value: true },
                15: { description: 'Chance de encontrar veios ricos', type: 'rich_veins', value: 0.15 }
            }
        },
        'fishing': {
            name: 'Pesca',
            description: 'Habilidade de pescar em lagos e rios',
            expPerHour: 12,
            bonuses: {
                1: { description: '+15% velocidade de pesca', type: 'gathering_speed', value: 0.15 },
                3: { description: '+25% chance de peixes raros', type: 'rare_chance', value: 0.25 },
                5: { description: '+30% peixes coletados', type: 'resource_bonus', value: 0.3 },
                10: { description: 'Pode pescar espécies lendárias', type: 'special_resources', value: true },
                15: { description: 'Mestre pescador: +50% todos os bônus', type: 'master_fishing', value: 0.5 }
            }
        }
    };

    // Status Effects Configuration
    const STATUS_EFFECTS_CONFIG = {
        'poison': {
            name: 'Envenenado',
            logClass: 'log-status-poison',
            durationPerStack: 3,
            damagePerTick: 3,
            ticksBeforeExpiration: 10
        },
        'bleed': {
            name: 'Sangrando',
            logClass: 'log-status-bleed',
            durationPerStack: 5,
            damagePerTick: 2,
            ticksBeforeExpiration: 5
        },
        'bleed_2': {
            name: 'Sangrando (Intenso)',
            logClass: 'log-status-bleed',
            durationPerStack: 5,
            damagePerTick: 5,
            ticksBeforeExpiration: 5
        },
        'bleed_3': {
            name: 'Sangrando (Mortal)',
            logClass: 'log-status-bleed',
            durationPerStack: 5,
            damagePerTick: 10,
            ticksBeforeExpiration: 5
        },
        'stun': {
            name: 'Atordoado',
            logClass: 'log-status-stun',
            duration: 1,
            description: 'Não pode agir neste turno.'
        },
        'freeze': {
            name: 'Congelado',
            logClass: 'log-status-freeze',
            duration: 1,
            description: 'Não pode agir e defesa reduzida.'
        },
        'shock': {
            name: 'Chocado',
            logClass: 'log-status-shock',
            duration: 1,
            description: 'Pode falhar em atacar.'
        }
    };

    // Enhanced Items Database
    const items = {
        // Basic Materials (Enhanced)
        'Madeira Comum': { name: 'Madeira Comum', type: 'material', rarity: 'common', description: 'Madeira de árvore comum.', weight: 1.0, buyPrice: 0, sellPrice: 1 },
        'Madeira Nobre': { name: 'Madeira Nobre', type: 'material', rarity: 'uncommon', description: 'Madeira de alta qualidade.', weight: 1.2, buyPrice: 0, sellPrice: 3 },
        'Madeira Élfica': { name: 'Madeira Élfica', type: 'material', rarity: 'rare', description: 'Madeira mágica dos elfos.', weight: 0.8, buyPrice: 0, sellPrice: 8 },
        'Madeira Ancestral': { name: 'Madeira Ancestral', type: 'material', rarity: 'legendary', description: 'Madeira de árvores milenares.', weight: 0.6, buyPrice: 0, sellPrice: 20 },
        'Madeira Cristalizada': { name: 'Madeira Cristalizada', type: 'material', rarity: 'epic', description: 'Madeira imbuída com cristal.', weight: 0.4, buyPrice: 0, sellPrice: 35 },

        'Pedra Bruta': { name: 'Pedra Bruta', type: 'material', rarity: 'common', description: 'Pedra comum não processada.', weight: 2.5, buyPrice: 0, sellPrice: 1 },
        'Pedra Afiada': { name: 'Pedra Afiada', type: 'material', rarity: 'uncommon', description: 'Pedra processada e afiada.', weight: 1.5, buyPrice: 0, sellPrice: 2 },
        'Pedra Rúnica': { name: 'Pedra Rúnica', type: 'material', rarity: 'rare', description: 'Pedra inscrita com runas antigas.', weight: 1.0, buyPrice: 0, sellPrice: 10 },
        'Pedra Lunar': { name: 'Pedra Lunar', type: 'material', rarity: 'epic', description: 'Pedra que brilha à luz da lua.', weight: 0.8, buyPrice: 0, sellPrice: 25 },

        // Enhanced Minerals
        'Minério de Ferro': { name: 'Minério de Ferro', type: 'material', rarity: 'common', description: 'Minério bruto de ferro.', weight: 2.0, buyPrice: 0, sellPrice: 3 },
        'Minério de Prata': { name: 'Minério de Prata', type: 'material', rarity: 'uncommon', description: 'Minério brilhante de prata.', weight: 1.8, buyPrice: 0, sellPrice: 6 },
        'Minério de Ouro': { name: 'Minério de Ouro', type: 'material', rarity: 'rare', description: 'Minério precioso de ouro.', weight: 1.5, buyPrice: 0, sellPrice: 10 },
        'Minério de Mithril': { name: 'Minério de Mithril', type: 'material', rarity: 'legendary', description: 'Metal élfico extremamente raro.', weight: 0.5, buyPrice: 0, sellPrice: 25 },
        'Minério de Adamantium': { name: 'Minério de Adamantium', type: 'material', rarity: 'mythic', description: 'O metal mais resistente conhecido.', weight: 0.3, buyPrice: 0, sellPrice: 50 },
        'Minério de Platina': { name: 'Minério de Platina', type: 'material', rarity: 'epic', description: 'Metal nobre e resistente.', weight: 1.2, buyPrice: 0, sellPrice: 18 },
        'Minério de Titânio': { name: 'Minério de Titânio', type: 'material', rarity: 'ultra-rare', description: 'Metal leve e extremamente forte.', weight: 0.8, buyPrice: 0, sellPrice: 30 },

        'Cristal Comum': { name: 'Cristal Comum', type: 'material', rarity: 'uncommon', description: 'Cristal com leve energia mágica.', weight: 0.3, buyPrice: 0, sellPrice: 4 },
        'Cristal Mágico': { name: 'Cristal Mágico', type: 'material', rarity: 'rare', description: 'Cristal pulsante de energia.', weight: 0.2, buyPrice: 0, sellPrice: 12 },
        'Cristal Divino': { name: 'Cristal Divino', type: 'material', rarity: 'divine', description: 'Cristal com poder divino.', weight: 0.1, buyPrice: 0, sellPrice: 100 },
        'Cristal de Gelo': { name: 'Cristal de Gelo', type: 'material', rarity: 'rare', description: 'Cristal que nunca derrete.', weight: 0.25, buyPrice: 0, sellPrice: 15 },
        'Cristal de Fogo': { name: 'Cristal de Fogo', type: 'material', rarity: 'rare', description: 'Cristal que emite calor constante.', weight: 0.25, buyPrice: 0, sellPrice: 15 },

        // Fish and Fishing Materials
        'Peixe Comum': { name: 'Peixe Comum', type: 'material', rarity: 'common', description: 'Peixe básico encontrado em qualquer lago.', weight: 0.5, buyPrice: 0, sellPrice: 2 },
        'Truta Dourada': { name: 'Truta Dourada', type: 'material', rarity: 'uncommon', description: 'Peixe dourado de sabor refinado.', weight: 0.8, buyPrice: 0, sellPrice: 5 },
        'Salmão Real': { name: 'Salmão Real', type: 'material', rarity: 'rare', description: 'Peixe nobre de águas profundas.', weight: 1.2, buyPrice: 0, sellPrice: 12 },
        'Peixe Cristalino': { name: 'Peixe Cristalino', type: 'material', rarity: 'epic', description: 'Peixe translúcido com propriedades mágicas.', weight: 0.3, buyPrice: 0, sellPrice: 40 },
        'Leviatã Jovem': { name: 'Leviatã Jovem', type: 'material', rarity: 'legendary', description: 'Criatura aquática lendária.', weight: 5.0, buyPrice: 0, sellPrice: 80 },
        'Escama de Sereia': { name: 'Escama de Sereia', type: 'material', rarity: 'mythic', description: 'Escama mística das profundezas.', weight: 0.1, buyPrice: 0, sellPrice: 150 },

        // Enhanced Tools
        'Vara de Pesca Simples': { name: 'Vara de Pesca Simples', type: 'tool', rarity: 'common', description: 'Vara básica para pesca.', weight: 2.0, buyPrice: 25, sellPrice: 10 },
        'Vara de Pesca Élfica': { name: 'Vara de Pesca Élfica', type: 'tool', rarity: 'rare', description: 'Vara encantada que atrai peixes raros.', weight: 1.5, buyPrice: 0, sellPrice: 60 },
        'Vara do Mestre Pescador': { name: 'Vara do Mestre Pescador', type: 'tool', rarity: 'legendary', description: 'Vara lendária dos grandes pescadores.', weight: 1.0, buyPrice: 0, sellPrice: 200 },

        'Picareta de Ferro': { name: 'Picareta de Ferro', type: 'tool', rarity: 'common', description: 'Essencial para mineração.', weight: 3.0, buyPrice: 0, sellPrice: 20 },
        'Picareta Aprimorada': { name: 'Picareta Aprimorada', type: 'tool', rarity: 'rare', description: 'Minera recursos 25% mais rapidamente.', weight: 2.5, buyPrice: 0, sellPrice: 60 },
        'Picareta Mágica': { name: 'Picareta Mágica', type: 'tool', rarity: 'epic', description: 'Revela veios ocultos de minério.', weight: 2.0, buyPrice: 0, sellPrice: 150 },
        'Picareta de Adamantium': { name: 'Picareta de Adamantium', type: 'tool', rarity: 'mythic', description: 'A picareta mais resistente do mundo.', weight: 1.5, buyPrice: 0, sellPrice: 300 },

        'Machado de Lenhador': { name: 'Machado de Lenhador', type: 'tool', rarity: 'common', description: 'Para cortar madeira.', weight: 4.0, buyPrice: 0, sellPrice: 25 },
        'Machado Élfico': { name: 'Machado Élfico', type: 'tool', rarity: 'rare', description: 'Corta madeira 30% mais rapidamente.', weight: 3.0, buyPrice: 0, sellPrice: 80 },
        'Machado Ancestral': { name: 'Machado Ancestral', type: 'tool', rarity: 'legendary', description: 'Pode cortar qualquer tipo de madeira.', weight: 2.5, buyPrice: 0, sellPrice: 200 },

        // Monster Materials (Enhanced)
        'Pele de Goblin': { name: 'Pele de Goblin', type: 'material', rarity: 'common', description: 'Pode ser usada para artesanato básico.', weight: 0.5, buyPrice: 0, sellPrice: 2 },
        'Pele de Lobo': { name: 'Pele de Lobo', type: 'material', rarity: 'common', description: 'Boa para agasalhos leves.', weight: 0.7, buyPrice: 0, sellPrice: 3 },
        'Pele de Urso': { name: 'Pele de Urso', type: 'material', rarity: 'uncommon', description: 'Pelagem grossa e resistente.', weight: 2.0, buyPrice: 0, sellPrice: 8 },
        'Escama de Dragão': { name: 'Escama de Dragão', type: 'material', rarity: 'legendary', description: 'Incrivelmente resistente.', weight: 2.0, buyPrice: 0, sellPrice: 15 },
        'Chifre de Minotauro': { name: 'Chifre de Minotauro', type: 'material', rarity: 'rare', description: 'Robusto e impressionante.', weight: 4.0, buyPrice: 0, sellPrice: 10 },
        'Teia Pegajosa': { name: 'Teia Pegajosa', type: 'material', rarity: 'common', description: 'Perfeita para prender inimigos.', weight: 0.05, buyPrice: 0, sellPrice: 1 },
        'Fio de Seda': { name: 'Fio de Seda', type: 'material', rarity: 'uncommon', description: 'Resistente e leve, ideal para roupas.', weight: 0.03, buyPrice: 0, sellPrice: 2 },
        'Essência Sombria': { name: 'Essência Sombria', type: 'material', rarity: 'rare', description: 'Energia das trevas condensada.', weight: 0.1, buyPrice: 0, sellPrice: 15 },
        'Garra de Lince': { name: 'Garra de Lince', type: 'material', rarity: 'uncommon', description: 'Garra afiada e resistente.', weight: 0.2, buyPrice: 0, sellPrice: 4 },
        'Dente de Sábia': { name: 'Dente de Sábia', type: 'material', rarity: 'rare', description: 'Dente com propriedades mágicas.', weight: 0.1, buyPrice: 0, sellPrice: 8 },

        // Enhanced Herbs and Materials
        'Erva Medicinal': { name: 'Erva Medicinal', type: 'material', rarity: 'common', description: 'Ingrediente para poções de cura.', weight: 0.1, buyPrice: 2, sellPrice: 1 },
        'Erva Venenosa': { name: 'Erva Venenosa', type: 'material', rarity: 'uncommon', description: 'Para poções perigosas.', weight: 0.08, buyPrice: 0, sellPrice: 3 },
        'Flor de Cura': { name: 'Flor de Cura', type: 'material', rarity: 'rare', description: 'Flor com propriedades curativas poderosas.', weight: 0.05, buyPrice: 0, sellPrice: 8 },
        'Cogumelo Luminoso': { name: 'Cogumelo Luminoso', type: 'material', rarity: 'uncommon', description: 'Emite luz fraca.', weight: 0.08, buyPrice: 3, sellPrice: 2 },
        'Raiz Mágica': { name: 'Raiz Mágica', type: 'material', rarity: 'rare', description: 'Raiz imbuída com energia arcana.', weight: 0.2, buyPrice: 0, sellPrice: 6 },
        'Pólen Dourado': { name: 'Pólen Dourado', type: 'material', rarity: 'epic', description: 'Pólen de flores mágicas.', weight: 0.01, buyPrice: 0, sellPrice: 30 },
        'Musgo Ancestral': { name: 'Musgo Ancestral', type: 'material', rarity: 'legendary', description: 'Musgo que cresce há milênios.', weight: 0.05, buyPrice: 0, sellPrice: 45 },
        'Esporo Cristalino': { name: 'Esporo Cristalino', type: 'material', rarity: 'epic', description: 'Esporo que se cristaliza no ar.', weight: 0.02, buyPrice: 0, sellPrice: 25 },

        // Crafting Components (Enhanced)
        'Frasco Vazio': { name: 'Frasco Vazio', type: 'material', rarity: 'common', description: 'Para coletar líquidos.', weight: 0.05, buyPrice: 1, sellPrice: 1 },
        'Pergaminho Vazio': { name: 'Pergaminho Vazio', type: 'material', rarity: 'common', description: 'Para escrever receitas e magias.', weight: 0.02, buyPrice: 2, sellPrice: 1 },
        'Corda': { name: 'Corda', type: 'material', rarity: 'common', description: 'Útil para amarrar e escalar.', weight: 0.3, buyPrice: 1, sellPrice: 1 },
        'Cola Forte': { name: 'Cola Forte', type: 'material', rarity: 'uncommon', description: 'Adesivo potente para criação.', weight: 0.1, buyPrice: 3, sellPrice: 2 },
        'Óleo Refinado': { name: 'Óleo Refinado', type: 'material', rarity: 'uncommon', description: 'Para lubrificar e preservar equipamentos.', weight: 0.2, buyPrice: 4, sellPrice: 2 },
        'Solda Mágica': { name: 'Solda Mágica', type: 'material', rarity: 'rare', description: 'Liga materiais com magia.', weight: 0.15, buyPrice: 0, sellPrice: 12 },
        'Fita Reforçada': { name: 'Fita Reforçada', type: 'material', rarity: 'uncommon', description: 'Resistente a rasgos e cortes.', weight: 0.05, buyPrice: 3, sellPrice: 2 },

        // Weapons (Enhanced)
        'Espada Curta': { name: 'Espada Curta', type: 'weapon', rarity: 'common', weaponType: 'swords', minAttackBonus: 5, maxAttackBonus: 8, description: 'Uma espada leve e afiada.', weight: 2.0, buyPrice: 0, sellPrice: 20 },
        'Espada Longa': { name: 'Espada Longa', type: 'weapon', rarity: 'uncommon', weaponType: 'swords', minAttackBonus: 8, maxAttackBonus: 12, description: 'Bem balanceada para combate.', weight: 3.0, buyPrice: 0, sellPrice: 40 },
        'Espada de Ferro': { name: 'Espada de Ferro', type: 'weapon', rarity: 'uncommon', weaponType: 'swords', minAttackBonus: 8, maxAttackBonus: 14, description: 'Uma espada forjada com ferro de qualidade.', weight: 3.2, buyPrice: 0, sellPrice: 50 },
        'Espada Élfica': { name: 'Espada Élfica', type: 'weapon', rarity: 'rare', weaponType: 'swords', minAttackBonus: 12, maxAttackBonus: 18, description: 'Lâmina élfica elegante e precisa.', weight: 2.5, buyPrice: 0, sellPrice: 120 },
        'Espada do Destino': { name: 'Espada do Destino', type: 'weapon', rarity: 'legendary', weaponType: 'swords', minAttackBonus: 20, maxAttackBonus: 35, description: 'Uma lâmina lendária.', weight: 5.0, buyPrice: 0, sellPrice: 200 },

        'Adaga Afiada': { name: 'Adaga Afiada', type: 'weapon', rarity: 'uncommon', weaponType: 'daggers', minAttackBonus: 3, maxAttackBonus: 5, description: 'Ideal para golpes críticos.', weight: 1.0, buyPrice: 0, sellPrice: 15, statusEffectChance: { type: 'bleed', chance: 0.20, stacks: 1 } },
        'Adaga Venenosa': { name: 'Adaga Venenosa', type: 'weapon', rarity: 'rare', weaponType: 'daggers', minAttackBonus: 4, maxAttackBonus: 7, description: 'Lâmina impregnada com veneno.', weight: 1.1, buyPrice: 0, sellPrice: 35, statusEffectChance: { type: 'poison', chance: 0.30, duration: 3 } },
        'Adaga Sombria': { name: 'Adaga Sombria', type: 'weapon', rarity: 'epic', weaponType: 'daggers', minAttackBonus: 6, maxAttackBonus: 10, description: 'Forjada nas sombras.', weight: 1.0, buyPrice: 0, sellPrice: 80, statusEffectChance: { type: 'poison', chance: 0.40, duration: 4 } },

        'Machado Enferrujado': { name: 'Machado Enferrujado', type: 'weapon', rarity: 'common', weaponType: 'axes', minAttackBonus: 3, maxAttackBonus: 6, description: 'Um machado velho, mas funcional.', weight: 3.5, buyPrice: 0, sellPrice: 10, statusEffectChance: { type: 'bleed', chance: 0.10, stacks: 1 } },
        'Machado de Guerra': { name: 'Machado de Guerra', type: 'weapon', rarity: 'rare', weaponType: 'axes', minAttackBonus: 12, maxAttackBonus: 18, description: 'Machado de dois gumes devastador.', weight: 5.0, buyPrice: 0, sellPrice: 80, statusEffectChance: { type: 'bleed', chance: 0.25, stacks: 2 } },
        'Machado de Titânio': { name: 'Machado de Titânio', type: 'weapon', rarity: 'epic', weaponType: 'axes', minAttackBonus: 15, maxAttackBonus: 22, description: 'Leve mas devastador.', weight: 4.0, buyPrice: 0, sellPrice: 150, statusEffectChance: { type: 'bleed', chance: 0.30, stacks: 2 } },

        'Clava Enorme': { name: 'Clava Enorme', type: 'weapon', rarity: 'uncommon', weaponType: 'clubs', minAttackBonus: 12, maxAttackBonus: 20, description: 'Capaz de esmagar ossos.', weight: 8.0, buyPrice: 0, sellPrice: 100, statusEffectChance: { type: 'stun', chance: 0.05 } },
        'Martelo de Guerra': { name: 'Martelo de Guerra', type: 'weapon', rarity: 'rare', weaponType: 'clubs', minAttackBonus: 15, maxAttackBonus: 25, description: 'Martelo pesado com poder devastador.', weight: 9.0, buyPrice: 0, sellPrice: 120, statusEffectChance: { type: 'stun', chance: 0.15 } },

        'Arco Curto': { name: 'Arco Curto', type: 'weapon', rarity: 'common', weaponType: 'bows', minAttackBonus: 4, maxAttackBonus: 7, description: 'Um arco simples para iniciantes.', weight: 2.5, buyPrice: 0, sellPrice: 18, requiresAmmo: 'Flechas (10)' },
        'Arco Élfico': { name: 'Arco Élfico', type: 'weapon', rarity: 'rare', weaponType: 'bows', minAttackBonus: 10, maxAttackBonus: 18, description: 'Um arco elegante feito de madeira especial.', weight: 2.0, buyPrice: 0, sellPrice: 80, requiresAmmo: 'Flechas (10)' },
        'Besta Pesada': { name: 'Besta Pesada', type: 'weapon', rarity: 'rare', weaponType: 'bows', minAttackBonus: 15, maxAttackBonus: 25, description: 'Causa grande dano.', weight: 7.0, buyPrice: 0, sellPrice: 120, requiresAmmo: 'Flechas (10)', statusEffectChance: { type: 'bleed', chance: 0.15, stacks: 2 } },

        'Lança de Caça': { name: 'Lança de Caça', type: 'weapon', rarity: 'common', weaponType: 'spears', minAttackBonus: 6, maxAttackBonus: 10, description: 'Mantém inimigos à distância.', weight: 4.0, buyPrice: 0, sellPrice: 30 },
        'Lança de Guerra': { name: 'Lança de Guerra', type: 'weapon', rarity: 'uncommon', weaponType: 'spears', minAttackBonus: 9, maxAttackBonus: 15, description: 'Lança longa para formações de batalha.', weight: 5.0, buyPrice: 0, sellPrice: 55 },

        'Cajado Sombrio': { name: 'Cajado Sombrio', type: 'weapon', rarity: 'rare', weaponType: 'staves', minAttackBonus: 10, maxAttackBonus: 15, description: 'Emite uma aura de trevas.', weight: 4.5, buyPrice: 0, sellPrice: 70, statusEffectChance: { type: 'poison', chance: 0.15, duration: 3 } },
        'Varinha Mágica': { name: 'Varinha Mágica', type: 'weapon', rarity: 'uncommon', weaponType: 'staves', minAttackBonus: 7, maxAttackBonus: 11, description: 'Aprimora feitiços elementais.', weight: 1.5, buyPrice: 0, sellPrice: 50, statusEffectChance: { type: 'shock', chance: 0.10 } },

        // Armor (Enhanced)
        'Armadura de Couro': { name: 'Armadura de Couro', type: 'armor', rarity: 'common', defenseBonus: 3, description: 'Leve e oferece proteção razoável.', weight: 5.0, buyPrice: 0, sellPrice: 25 },
        'Armadura de Ferro': { name: 'Armadura de Ferro', type: 'armor', rarity: 'uncommon', defenseBonus: 7, description: 'Armadura resistente feita de ferro.', weight: 12.0, buyPrice: 0, sellPrice: 75 },
        'Armadura Pesada': { name: 'Armadura Pesada', type: 'armor', rarity: 'uncommon', defenseBonus: 8, description: 'Excelente proteção, mas pesada.', weight: 15.0, buyPrice: 0, sellPrice: 80 },
        'Armadura de Placas': { name: 'Armadura de Placas', type: 'armor', rarity: 'rare', defenseBonus: 12, description: 'Defesa suprema.', weight: 20.0, buyPrice: 0, sellPrice: 150 },
        'Armadura Élfica': { name: 'Armadura Élfica', type: 'armor', rarity: 'rare', defenseBonus: 9, description: 'Leve mas muito resistente.', weight: 8.0, buyPrice: 0, sellPrice: 120 },
        'Armadura Dracônica': { name: 'Armadura Dracônica', type: 'armor', rarity: 'legendary', defenseBonus: 15, description: 'Feita com escamas de dragão.', weight: 18.0, buyPrice: 0, sellPrice: 300 },
        'Armadura de Mithril': { name: 'Armadura de Mithril', type: 'armor', rarity: 'epic', defenseBonus: 13, description: 'Leve como uma pluma, forte como aço.', weight: 6.0, buyPrice: 0, sellPrice: 250 },

        // Enhanced Consumables
        'Poção de Cura Menor': { name: 'Poção de Cura Menor', type: 'consumable', rarity: 'common', heal: 20, description: 'Restaura um pouco de vida.', weight: 0.2, buyPrice: 15, sellPrice: 5 },
        'Poção de Cura Média': { name: 'Poção de Cura Média', type: 'consumable', rarity: 'uncommon', heal: 50, description: 'Restaura vida razoável.', weight: 0.3, buyPrice: 40, sellPrice: 15 },
        'Poção de Cura Grande': { name: 'Poção de Cura Grande', type: 'consumable', rarity: 'rare', heal: 100, description: 'Restaura muita vida.', weight: 0.5, buyPrice: 90, sellPrice: 30 },
        'Poção de Cura Superior': { name: 'Poção de Cura Superior', type: 'consumable', rarity: 'rare', heal: 80, description: 'Restaura uma grande quantidade de vida.', weight: 0.4, buyPrice: 70, sellPrice: 25 },
        'Elixir de Vida': { name: 'Elixir de Vida', type: 'consumable', rarity: 'legendary', heal: 200, description: 'Cura completa instantânea.', weight: 0.3, buyPrice: 200, sellPrice: 80 },
        'Poção de Cura Divina': { name: 'Poção de Cura Divina', type: 'consumable', rarity: 'divine', heal: 300, description: 'Benção dos deuses.', weight: 0.2, buyPrice: 500, sellPrice: 150 },

        'Poção de Força': { name: 'Poção de Força', type: 'consumable', rarity: 'uncommon', description: 'Aumenta força temporariamente.', weight: 0.2, buyPrice: 30, sellPrice: 10 },
        'Poção de Resistência': { name: 'Poção de Resistência', type: 'consumable', rarity: 'uncommon', description: 'Aumenta resistência temporariamente.', weight: 0.2, buyPrice: 30, sellPrice: 10 },
        'Poção de Agilidade': { name: 'Poção de Agilidade', type: 'consumable', rarity: 'uncommon', description: 'Aumenta agilidade temporariamente.', weight: 0.2, buyPrice: 30, sellPrice: 10 },
        'Poção de Inteligência': { name: 'Poção de Inteligência', type: 'consumable', rarity: 'uncommon', description: 'Aumenta inteligência temporariamente.', weight: 0.2, buyPrice: 30, sellPrice: 10 },
        'Elixir do Poder': { name: 'Elixir do Poder', type: 'consumable', rarity: 'epic', description: 'Aumenta todos os atributos temporariamente.', weight: 0.3, buyPrice: 150, sellPrice: 60 },

        'Antídoto': { name: 'Antídoto', type: 'consumable', rarity: 'common', cureEffect: 'poison', description: 'Cura venenos leves.', weight: 0.1, buyPrice: 20, sellPrice: 8 },
        'Antídoto Poderoso': { name: 'Antídoto Poderoso', type: 'consumable', rarity: 'uncommon', cureEffect: 'poison', description: 'Cura qualquer veneno.', weight: 0.15, buyPrice: 50, sellPrice: 20 },
        'Bandagem': { name: 'Bandagem', type: 'consumable', rarity: 'common', cureEffect: 'bleed', cureBleedLevel: 1, description: 'Estanca pequenos sangramentos.', weight: 0.1, buyPrice: 10, sellPrice: 4 },
        'Atadura Pesada': { name: 'Atadura Pesada', type: 'consumable', rarity: 'uncommon', cureEffect: 'bleed', cureBleedLevel: 2, description: 'Para sangramentos intensos.', weight: 0.2, buyPrice: 30, sellPrice: 12 },
        'Kit Médico': { name: 'Kit Médico', type: 'consumable', rarity: 'rare', cureEffect: 'bleed', cureBleedLevel: 3, heal: 30, description: 'Cura qualquer sangramento e restaura vida.', weight: 0.5, buyPrice: 80, sellPrice: 30 },

        'Rações de Viagem': { name: 'Rações de Viagem', type: 'consumable', rarity: 'common', reduceFatigue: 20, description: 'Comida para sustento.', weight: 0.4, buyPrice: 5, sellPrice: 2 },
        'Refeição Nutritiva': { name: 'Refeição Nutritiva', type: 'consumable', rarity: 'uncommon', reduceFatigue: 40, heal: 10, description: 'Comida que restaura energia e vida.', weight: 0.6, buyPrice: 15, sellPrice: 6 },
        'Banquete Real': { name: 'Banquete Real', type: 'consumable', rarity: 'rare', reduceFatigue: 80, heal: 30, description: 'Refeição luxuosa que restaura completamente.', weight: 1.0, buyPrice: 50, sellPrice: 20 },
        'Peixe Grelhado': { name: 'Peixe Grelhado', type: 'consumable', rarity: 'common', reduceFatigue: 15, heal: 8, description: 'Prato simples mas nutritivo.', weight: 0.3, buyPrice: 8, sellPrice: 3 },

        'Pedra de Afiação': { name: 'Pedra de Afiação', type: 'consumable', rarity: 'uncommon', description: 'Aumenta dano da arma temporariamente.', weight: 0.3, buyPrice: 25, sellPrice: 10 },
        'Óleo de Arma': { name: 'Óleo de Arma', type: 'consumable', rarity: 'rare', description: 'Faz a arma causar dano elemental.', weight: 0.1, buyPrice: 40, sellPrice: 15 },

        // Ammunition (Enhanced)
        'Flechas (10)': { name: 'Flechas (10)', type: 'ammo', rarity: 'common', description: 'Dez flechas afiadas.', weight: 0.5, buyPrice: 10, sellPrice: 3 },
        'Flechas Prata (10)': { name: 'Flechas Prata (10)', type: 'ammo', rarity: 'uncommon', description: 'Flechas de prata contra mortos-vivos.', weight: 0.6, buyPrice: 25, sellPrice: 8 },
        'Flechas Mágicas (10)': { name: 'Flechas Mágicas (10)', type: 'ammo', rarity: 'rare', description: 'Flechas encantadas com magia.', weight: 0.4, buyPrice: 50, sellPrice: 18 },
        'Flechas de Fogo (10)': { name: 'Flechas de Fogo (10)', type: 'ammo', rarity: 'rare', description: 'Flechas que explodem em chamas.', weight: 0.5, buyPrice: 60, sellPrice: 20 },

        // Backpacks
        'Mochila Simples': { name: 'Mochila Simples', type: 'backpack', rarity: 'common', weightBonus: 15.0, description: 'Aumenta capacidade de carga em 15kg.', weight: 2.0, buyPrice: 75, sellPrice: 30, passiveEffect: { type: 'weight_boost', value: 15.0 } },
        'Mochila de Aventureiro': { name: 'Mochila de Aventureiro', type: 'backpack', rarity: 'uncommon', weightBonus: 25.0, description: 'Aumenta capacidade de carga em 25kg.', weight: 3.5, buyPrice: 150, sellPrice: 60, passiveEffect: { type: 'weight_boost', value: 25.0 } },
        'Mochila Mágica': { name: 'Mochila Mágica', type: 'backpack', rarity: 'rare', weightBonus: 40.0, description: 'Mochila encantada com grande capacidade.', weight: 2.0, buyPrice: 300, sellPrice: 120, passiveEffect: { type: 'weight_boost', value: 40.0 } }
    };

    // Enhanced Crafting Recipes
    const CRAFTING_RECIPES = {
        weapons: {
            'Espada de Ferro': {
                name: 'Espada de Ferro',
                description: 'Uma espada forjada com ferro de qualidade',
                materials: {
                    'Minério de Ferro': 4,
                    'Madeira Comum': 2,
                    'Corda': 1
                },
                skillsRequired: { 'swords': 1 },
                craftTime: 300000, // 5 minutes
                result: 'Espada de Ferro'
            },
            'Espada Élfica': {
                name: 'Espada Élfica',
                description: 'Uma lâmina élfica elegante e precisa',
                materials: {
                    'Minério de Prata': 3,
                    'Madeira Élfica': 2,
                    'Fio de Seda': 2,
                    'Cristal Mágico': 1
                },
                skillsRequired: { 'swords': 5, 'lumberjack': 3 },
                craftTime: 1800000, // 30 minutes
                result: 'Espada Élfica'
            },
            'Arco Élfico': {
                name: 'Arco Élfico',
                description: 'Um arco elegante feito de madeira especial',
                materials: {
                    'Madeira Nobre': 3,
                    'Fio de Seda': 2,
                    'Cola Forte': 1
                },
                skillsRequired: { 'bows': 3, 'lumberjack': 2 },
                craftTime: 600000, // 10 minutes
                result: 'Arco Élfico'
            },
            'Adaga Venenosa': {
                name: 'Adaga Venenosa',
                description: 'Adaga impregnada com veneno mortal',
                materials: {
                    'Minério de Ferro': 2,
                    'Erva Venenosa': 3,
                    'Óleo Refinado': 1
                },
                skillsRequired: { 'daggers': 5 },
                craftTime: 900000, // 15 minutes
                result: 'Adaga Venenosa'
            },
            'Adaga Sombria': {
                name: 'Adaga Sombria',
                description: 'Forjada nas profundezas sombrias',
                materials: {
                    'Minério de Ferro': 3,
                    'Essência Sombria': 2,
                    'Cristal Comum': 1,
                    'Óleo Refinado': 1
                },
                skillsRequired: { 'daggers': 8 },
                craftTime: 1800000, // 30 minutes
                result: 'Adaga Sombria'
            },
            'Machado de Guerra': {
                name: 'Machado de Guerra',
                description: 'Machado de dois gumes para guerra',
                materials: {
                    'Minério de Ferro': 6,
                    'Madeira Nobre': 2,
                    'Pedra Afiada': 2
                },
                skillsRequired: { 'axes': 7 },
                craftTime: 1800000, // 30 minutes
                result: 'Machado de Guerra'
            },
            'Machado de Titânio': {
                name: 'Machado de Titânio',
                description: 'Leve mas devastador',
                materials: {
                    'Minério de Titânio': 4,
                    'Madeira Élfica': 2,
                    'Solda Mágica': 1,
                    'Cristal Comum': 1
                },
                skillsRequired: { 'axes': 12, 'mining': 8 },
                craftTime: 3600000, // 1 hour
                result: 'Machado de Titânio'
            },
            'Martelo de Guerra': {
                name: 'Martelo de Guerra',
                description: 'Martelo devastador para combate',
                materials: {
                    'Minério de Ferro': 8,
                    'Madeira Nobre': 3,
                    'Pedra Bruta': 4
                },
                skillsRequired: { 'clubs': 8 },
                craftTime: 2700000, // 45 minutes
                result: 'Martelo de Guerra'
            },
            'Lança de Guerra': {
                name: 'Lança de Guerra',
                description: 'Lança longa para formações de batalha',
                materials: {
                    'Minério de Ferro': 3,
                    'Madeira Comum': 4,
                    'Corda': 2
                },
                skillsRequired: { 'spears': 4 },
                craftTime: 450000, // 7.5 minutes
                result: 'Lança de Guerra'
            },
            'Vara de Pesca Élfica': {
                name: 'Vara de Pesca Élfica',
                description: 'Vara encantada que atrai peixes raros',
                materials: {
                    'Madeira Élfica': 2,
                    'Fio de Seda': 3,
                    'Cristal Comum': 1,
                    'Cola Forte': 1
                },
                skillsRequired: { 'fishing': 5, 'lumberjack': 3 },
                craftTime: 1200000, // 20 minutes
                result: 'Vara de Pesca Élfica'
            },
            'Vara do Mestre Pescador': {
                name: 'Vara do Mestre Pescador',
                description: 'Vara lendária dos grandes pescadores',
                materials: {
                    'Madeira Ancestral': 1,
                    'Fio de Seda': 5,
                    'Cristal Mágico': 2,
                    'Solda Mágica': 1,
                    'Escama de Sereia': 1
                },
                skillsRequired: { 'fishing': 15, 'lumberjack': 10 },
                craftTime: 7200000, // 2 hours
                result: 'Vara do Mestre Pescador'
            }
        },
        armor: {
            'Armadura de Ferro': {
                name: 'Armadura de Ferro',
                description: 'Armadura resistente feita de ferro',
                materials: {
                    'Minério de Ferro': 8,
                    'Pele de Lobo': 4,
                    'Corda': 3
                },
                skillsRequired: {},
                craftTime: 1200000, // 20 minutes
                result: 'Armadura de Ferro'
            },
            'Armadura Élfica': {
                name: 'Armadura Élfica',
                description: 'Armadura leve e resistente dos elfos',
                materials: {
                    'Minério de Prata': 6,
                    'Fio de Seda': 8,
                    'Madeira Élfica': 2
                },
                skillsRequired: { 'lumberjack': 10 },
                craftTime: 3600000, // 1 hour
                result: 'Armadura Élfica'
            },
            'Armadura de Mithril': {
                name: 'Armadura de Mithril',
                description: 'Leve como uma pluma, forte como aço',
                materials: {
                    'Minério de Mithril': 8,
                    'Fio de Seda': 10,
                    'Cristal Mágico': 3,
                    'Solda Mágica': 2
                },
                skillsRequired: { 'mining': 12, 'lumberjack': 8 },
                craftTime: 7200000, // 2 hours
                result: 'Armadura de Mithril'
            },
            'Armadura Dracônica': {
                name: 'Armadura Dracônica',
                description: 'Armadura suprema feita com escamas de dragão',
                materials: {
                    'Escama de Dragão': 10,
                    'Minério de Mithril': 5,
                    'Essência Sombria': 3
                },
                skillsRequired: { 'mining': 15 },
                craftTime: 604800000, // 1 week
                result: 'Armadura Dracônica'
            }
        },
        tools: {
            'Picareta Aprimorada': {
                name: 'Picareta Aprimorada',
                description: 'Uma picareta mais eficiente para mineração',
                materials: {
                    'Minério de Ferro': 3,
                    'Madeira Comum': 2,
                    'Pedra Afiada': 1
                },
                skillsRequired: { 'mining': 5 },
                craftTime: 600000, // 10 minutes
                result: 'Picareta Aprimorada'
            },
            'Picareta Mágica': {
                name: 'Picareta Mágica',
                description: 'Picareta encantada que revela veios ocultos',
                materials: {
                    'Minério de Mithril': 2,
                    'Cristal Mágico': 3,
                    'Essência Sombria': 1
                },
                skillsRequired: { 'mining': 12 },
                craftTime: 7200000, // 2 hours
                result: 'Picareta Mágica'
            },
            'Picareta de Adamantium': {
                name: 'Picareta de Adamantium',
                description: 'A picareta mais resistente do mundo',
                materials: {
                    'Minério de Adamantium': 3,
                    'Cristal Divino': 1,
                    'Solda Mágica': 2,
                    'Madeira Ancestral': 1
                },
                skillsRequired: { 'mining': 18 },
                craftTime: 14400000, // 4 hours
                result: 'Picareta de Adamantium'
            },
            'Machado Élfico': {
                name: 'Machado Élfico',
                description: 'Machado de lenhador élfico superior',
                materials: {
                    'Minério de Prata': 4,
                    'Madeira Élfica': 3,
                    'Fio de Seda': 2
                },
                skillsRequired: { 'lumberjack': 8 },
                craftTime: 1800000, // 30 minutes
                result: 'Machado Élfico'
            },
            'Machado Ancestral': {
                name: 'Machado Ancestral',
                description: 'Machado lendário dos antigos lenhadores',
                materials: {
                    'Minério de Adamantium': 2,
                    'Madeira Ancestral': 4,
                    'Cristal Divino': 1
                },
                skillsRequired: { 'lumberjack': 15 },
                craftTime: 86400000, // 1 day
                result: 'Machado Ancestral'
            }
        },
        consumables: {
            'Poção de Cura Superior': {
                name: 'Poção de Cura Superior',
                description: 'Uma poção de cura muito potente',
                materials: {
                    'Erva Medicinal': 3,
                    'Cogumelo Luminoso': 2,
                    'Frasco Vazio': 1
                },
                skillsRequired: {},
                craftTime: 180000, // 3 minutes
                result: 'Poção de Cura Superior'
            },
            'Elixir de Vida': {
                name: 'Elixir de Vida',
                description: 'Poção de cura suprema',
                materials: {
                    'Flor de Cura': 5,
                    'Pólen Dourado': 2,
                    'Cristal Mágico': 1,
                    'Frasco Vazio': 1
                },
                skillsRequired: { 'lumberjack': 10 },
                craftTime: 3600000, // 1 hour
                result: 'Elixir de Vida'
            },
            'Poção de Cura Divina': {
                name: 'Poção de Cura Divina',
                description: 'Benção dos deuses em forma líquida',
                materials: {
                    'Flor de Cura': 8,
                    'Cristal Divino': 1,
                    'Musgo Ancestral': 3,
                    'Frasco Vazio': 1
                },
                skillsRequired: { 'lumberjack': 15, 'mining': 15 },
                craftTime: 7200000, // 2 hours
                result: 'Poção de Cura Divina'
            },
            'Elixir do Poder': {
                name: 'Elixir do Poder',
                description: 'Elixir que aumenta todos os atributos',
                materials: {
                    'Raiz Mágica': 4,
                    'Cristal Comum': 3,
                    'Essência Sombria': 2,
                    'Frasco Vazio': 1
                },
                skillsRequired: { 'mining': 8 },
                craftTime: 1800000, // 30 minutes
                result: 'Elixir do Poder'
            },
            'Antídoto Poderoso': {
                name: 'Antídoto Poderoso',
                description: 'Antídoto contra qualquer veneno',
                materials: {
                    'Erva Medicinal': 2,
                    'Erva Venenosa': 1,
                    'Cogumelo Luminoso': 2,
                    'Frasco Vazio': 1
                },
                skillsRequired: {},
                craftTime: 300000, // 5 minutes
                result: 'Antídoto Poderoso'
            },
            'Kit Médico': {
                name: 'Kit Médico',
                description: 'Kit completo de primeiros socorros',
                materials: {
                    'Bandagem': 5,
                    'Atadura Pesada': 3,
                    'Antídoto': 2,
                    'Poção de Cura Média': 1
                },
                skillsRequired: {},
                craftTime: 600000, // 10 minutes
                result: 'Kit Médico'
            },
            'Banquete Real': {
                name: 'Banquete Real',
                description: 'Refeição régia e nutritiva',
                materials: {
                    'Rações de Viagem': 5,
                    'Refeição Nutritiva': 3,
                    'Pólen Dourado': 1
                },
                skillsRequired: { 'lumberjack': 5 },
                craftTime: 900000, // 15 minutes
                result: 'Banquete Real'
            },
            'Peixe Grelhado': {
                name: 'Peixe Grelhado',
                description: 'Prato simples mas nutritivo',
                materials: {
                    'Peixe Comum': 2,
                    'Erva Medicinal': 1
                },
                skillsRequired: { 'fishing': 1 },
                craftTime: 120000, // 2 minutes
                result: 'Peixe Grelhado'
            }
        },
        materials: {
            'Fio de Seda Refinado': {
                name: 'Fio de Seda Refinado',
                description: 'Seda processada de alta qualidade',
                materials: {
                    'Fio de Seda': 10,
                    'Óleo Refinado': 2
                },
                skillsRequired: {},
                craftTime: 300000, // 5 minutes
                result: {
                    name: 'Fio de Seda Refinado',
                    type: 'material',
                    rarity: 'rare',
                    description: 'Seda de qualidade superior.',
                    weight: 0.02,
                    sellPrice: 8
                }
            },
            'Liga de Ferro': {
                name: 'Liga de Ferro',
                description: 'Metal processado mais resistente',
                materials: {
                    'Minério de Ferro': 5,
                    'Pedra Afiada': 2,
                    'Óleo Refinado': 1
                },
                skillsRequired: { 'mining': 3 },
                craftTime: 600000, // 10 minutes
                result: {
                    name: 'Liga de Ferro',
                    type: 'material',
                    rarity: 'uncommon',
                    description: 'Ferro processado e resistente.',
                    weight: 1.8,
                    sellPrice: 8
                }
            },
            'Essência Concentrada': {
                name: 'Essência Concentrada',
                description: 'Essência mágica purificada',
                materials: {
                    'Essência Sombria': 3,
                    'Cristal Comum': 2,
                    'Pólen Dourado': 1
                },
                skillsRequired: { 'lumberjack': 8, 'mining': 8 },
                craftTime: 1800000, // 30 minutes
                result: {
                    name: 'Essência Concentrada',
                    type: 'material',
                    rarity: 'epic',
                    description: 'Essência mágica altamente concentrada.',
                    weight: 0.05,
                    sellPrice: 40
                }
            }
        }
    };

    // Enhanced Area Content with fishing
    const AREA_CONTENT = {
        'goblin_forest': {
            monsters: ['Goblin', 'Lobo Cinzento'],
            resources: ['Pele de Goblin', 'Pele de Lobo', 'Madeira Comum', 'Erva Medicinal']
        },
        'dark_forest': {
            monsters: ['Lobo Sombrio', 'Urso Negro'],
            resources: ['Madeira Nobre', 'Erva Venenosa', 'Cogumelo Luminoso', 'Essência Sombria']
        },
        'ancient_forest': {
            monsters: ['Ent Ancião', 'Driades'],
            resources: ['Madeira Élfica', 'Madeira Ancestral', 'Flor de Cura', 'Raiz Mágica']
        },
        'crystal_forest': {
            monsters: ['Sprites Cristalinos'],
            resources: ['Madeira Élfica', 'Cristal Comum', 'Pólen Dourado', 'Fio de Seda']
        },
        'mystic_grove': {
            monsters: ['Fada Sombria', 'Guardião da Floresta'],
            resources: ['Madeira Cristalizada', 'Esporo Cristalino', 'Musgo Ancestral', 'Cristal Mágico']
        },
        'cursed_woods': {
            monsters: ['Árvore Amaldiçoada', 'Espírito da Floresta'],
            resources: ['Madeira Sombria', 'Essência Sombria', 'Erva Venenosa', 'Raiz Mágica']
        },
        'iron_mountains': {
            monsters: [],
            resources: ['Minério de Ferro', 'Pedra Bruta', 'Pedra Afiada', 'Cristal Comum']
        },
        'silver_peaks': {
            monsters: [],
            resources: ['Minério de Prata', 'Minério de Ferro', 'Pedra Rúnica', 'Cristal Mágico']
        },
        'gold_mines': {
            monsters: [],
            resources: ['Minério de Ouro', 'Minério de Prata', 'Cristal Mágico', 'Pedra Rúnica']
        },
        'mithril_depths': {
            monsters: [],
            resources: ['Minério de Mithril', 'Cristal Divino', 'Essência Concentrada', 'Pedra Rúnica']
        },
        'platinum_quarry': {
            monsters: [],
            resources: ['Minério de Platina', 'Minério de Ouro', 'Cristal de Fogo', 'Pedra Lunar']
        },
        'titanium_cliffs': {
            monsters: [],
            resources: ['Minério de Titânio', 'Minério de Platina', 'Cristal de Gelo', 'Pedra Rúnica']
        },
        'crystal_lake': {
            monsters: [],
            resources: ['Peixe Cristalino', 'Cristal Comum', 'Escama de Sereia', 'Pólen Dourado']
        },
        'azure_waters': {
            monsters: [],
            resources: ['Truta Dourada', 'Salmão Real', 'Peixe Comum', 'Cristal de Gelo']
        },
        'mystic_pond': {
            monsters: [],
            resources: ['Leviatã Jovem', 'Peixe Cristalino', 'Escama de Sereia', 'Cristal Mágico']
        },
        'dragon_lake': {
            monsters: [],
            resources: ['Leviatã Jovem', 'Escama de Sereia', 'Cristal Divino', 'Essência Sombria']
        },
        'spider_lair': {
            monsters: ['Aranha Gigante', 'Rainha Aranha'],
            resources: ['Teia Pegajosa', 'Fio de Seda', 'Essência Sombria']
        },
        'dark_cave': {
            monsters: ['Morcego Gigante', 'Esqueleto'],
            resources: ['Olho de Morcego', 'Pedra Bruta', 'Cristal Comum']
        },
        'orc_encampment': {
            monsters: ['Orc Guerreiro', 'Orc Xamã'],
            resources: ['Coração de Orc', 'Pedra Bruta', 'Minério de Ferro']
        },
        'dragon_peak': {
            monsters: ['Dragão Jovem'],
            resources: ['Minério de Ouro', 'Escama de Dragão', 'Olho de Dragão', 'Cristal Divino']
        },
        'undead_crypts': {
            monsters: ['Esqueleto Guerreiro', 'Lich'],
            resources: ['Essência Sombria', 'Pedra Rúnica', 'Cristal Sombrio']
        },
        'goblin_outpost': {
            monsters: ['Goblin Soldado', 'Goblin Capitão'],
            resources: ['Pele de Goblin', 'Garra de Lince', 'Minério de Ferro']
        },
        'wolves_den': {
            monsters: ['Lobo Alfa', 'Lobo Selvagem'],
            resources: ['Pele de Lobo', 'Dente de Sábia', 'Erva Medicinal']
        },
        'troll_bridge': {
            monsters: ['Troll das Pedras', 'Troll Guerreiro'],
            resources: ['Pedra Bruta', 'Chifre de Minotauro', 'Minério de Ferro']
        },
        'bandit_hideout': {
            monsters: ['Bandido', 'Líder Bandido'],
            resources: ['Corda', 'Óleo Refinado', 'Moedas de Ouro']
        },
        'ice_cavern': {
            monsters: ['Golem de Gelo', 'Espírito Congelado'],
            resources: ['Cristal de Gelo', 'Pedra Lunar', 'Essência Sombria']
        },
        'fire_temple': {
            monsters: ['Salamandra', 'Elemental de Fogo'],
            resources: ['Cristal de Fogo', 'Pedra Rúnica', 'Essência Concentrada']
        },
        'shadow_realm': {
            monsters: ['Sombra Viva', 'Senhor das Sombras'],
            resources: ['Essência Sombria', 'Cristal Sombrio', 'Pedra Rúnica']
        }
    };

    // Expanded Points of Interest
    const pointsOfInterest = [
        // Starting Area
        {
            id: 'start_village',
            name: 'Vilarejo Inicial',
            type: 'settlement',
            x: 15,
            y: 25,
            levelRange: [1, 3],
            explored: true,
            description: 'Um pequeno vilarejo onde começou sua aventura. Local seguro com comerciantes básicos.',
            resources: 'Suprimentos básicos, equipamentos iniciais',
            initialStock: {
                'Poção de Cura Menor': 8,
                'Rações de Viagem': 15,
                'Erva Medicinal': 12,
                'Frasco Vazio': 10,
                'Bandagem': 8,
                'Antídoto': 5,
                'Flechas (10)': 8,
                'Pergaminho Vazio': 5,
                'Corda': 3,
                'Óleo Refinado': 2,
                'Vara de Pesca Simples': 3
            },
            stock: {},
            lastRestockTime: 0
        },

        // Capitals - 3 major cities
        {
            id: 'golden_capital',
            name: 'Capital Dourada',
            type: 'capital',
            x: 50,
            y: 50,
            levelRange: [15, 30],
            explored: true,
            description: 'A maior e mais rica cidade do reino. Centro de comércio e poder.',
            resources: 'Controle territorial supremo, renda de ouro massiva',
            owner: null,
            territoryRadius: 50,
            lastIncome: 0,
            conquestTime: CAPITAL_CONQUEST_TIME_MS
        },
        {
            id: 'crystal_metropolis',
            name: 'Metrópole Cristalina',
            type: 'capital',
            x: 20,
            y: 80,
            levelRange: [18, 35],
            explored: true,
            description: 'Cidade mágica construída inteiramente de cristal. Centro do conhecimento arcano.',
            resources: 'Controle territorial mágico, renda de cristais',
            owner: null,
            territoryRadius: 45,
            lastIncome: 0,
            conquestTime: CAPITAL_CONQUEST_TIME_MS
        },
        {
            id: 'iron_stronghold',
            name: 'Fortaleza de Ferro',
            type: 'capital',
            x: 85,
            y: 15,
            levelRange: [20, 40],
            explored: true,
            description: 'Cidade-fortaleza militar. Controla as rotas de minério e guerra.',
            resources: 'Controle territorial militar, renda de minérios',
            owner: null,
            territoryRadius: 40,
            lastIncome: 0,
            conquestTime: CAPITAL_CONQUEST_TIME_MS
        },

        // Castles - 5 total
        {
            id: 'iron_fortress',
            name: 'Fortaleza de Ferro',
            type: 'castle',
            x: 45,
            y: 30,
            levelRange: [8, 15],
            explored: true,
            description: 'Uma fortaleza imponente que controla as rotas comerciais da região.',
            resources: 'Controle territorial, rendimentos de recursos',
            owner: null,
            territoryRadius: 20,
            lastIncome: 0
        },
        {
            id: 'shadow_keep',
            name: 'Bastião das Sombras',
            type: 'castle',
            x: 25,
            y: 60,
            levelRange: [12, 20],
            explored: true,
            description: 'Um castelo sombrio construído sobre antigas ruínas mágicas.',
            resources: 'Controle territorial, rendimentos místicos',
            owner: null,
            territoryRadius: 25,
            lastIncome: 0
        },
        {
            id: 'crystal_citadel',
            name: 'Cidadela Cristalina',
            type: 'castle',
            x: 70,
            y: 65,
            levelRange: [15, 25],
            explored: true,
            description: 'Uma cidadela construída inteiramente de cristal mágico.',
            resources: 'Controle territorial, rendimentos mágicos',
            owner: null,
            territoryRadius: 30,
            lastIncome: 0
        },
        {
            id: 'sky_palace',
            name: 'Palácio Celestial',
            type: 'castle',
            x: 80,
            y: 85,
            levelRange: [20, 30],
            explored: true,
            description: 'Um palácio suspenso nas nuvens, símbolo de poder supremo.',
            resources: 'Controle territorial, rendimentos divinos',
            owner: null,
            territoryRadius: 35,
            lastIncome: 0
        },
        {
            id: 'dragon_throne',
            name: 'Trono do Dragão',
            type: 'castle',
            x: 90,
            y: 40,
            levelRange: [25, 35],
            explored: true,
            description: 'Castelo lendário onde dragões governavam em tempos antigos.',
            resources: 'Controle territorial, rendimentos dracônicos',
            owner: null,
            territoryRadius: 40,
            lastIncome: 0
        },

        // Forests - 10 minimum
        {
            id: 'goblin_forest',
            name: 'Floresta dos Goblins',
            type: 'forest',
            x: 35,
            y: 35,
            levelRange: [1, 5],
            explored: false,
            description: 'Uma floresta densa com árvores comuns e algumas criaturas menores.',
            resources: 'Madeira comum, ervas medicinais básicas',
            resource: { type: 'Madeira Comum', abundance: 'Abundante' },
            owner: null
        },
        {
            id: 'dark_forest',
            name: 'Floresta Sombria',
            type: 'forest',
            x: 30,
            y: 70,
            levelRange: [5, 10],
            explored: false,
            description: 'Floresta densa com árvores nobres e plantas venenosas.',
            resources: 'Madeira nobre, ervas venenosas, cogumelos luminosos',
            resource: { type: 'Madeira Nobre', abundance: 'Comum' },
            owner: null
        },
        {
            id: 'ancient_forest',
            name: 'Floresta Ancestral',
            type: 'forest',
            x: 10,
            y: 15,
            levelRange: [10, 15],
            explored: false,
            description: 'Floresta mágica com árvores milenares e plantas mágicas.',
            resources: 'Madeira élfica, madeira ancestral, flores de cura',
            resource: { type: 'Madeira Élfica', abundance: 'Raro' },
            owner: null
        },
        {
            id: 'crystal_forest',
            name: 'Bosque Cristalino',
            type: 'forest',
            x: 75,
            y: 20,
            levelRange: [8, 12],
            explored: false,
            description: 'Floresta encantada onde crescem árvores cristalizadas.',
            resources: 'Madeira élfica, cristais mágicos, pólen dourado',
            resource: { type: 'Cristal Comum', abundance: 'Comum' },
            owner: null
        },
        {
            id: 'mystic_grove',
            name: 'Bosque Místico',
            type: 'forest',
            x: 60,
            y: 10,
            levelRange: [12, 18],
            explored: false,
            description: 'Bosque encantado onde a magia flui livremente.',
            resources: 'Madeira cristalizada, esporos cristalinos, musgo ancestral',
            resource: { type: 'Madeira Cristalizada', abundance: 'Raro' },
            owner: null
        },
        {
            id: 'cursed_woods',
            name: 'Mata Amaldiçoada',
            type: 'forest',
            x: 15,
            y: 90,
            levelRange: [15, 22],
            explored: false,
            description: 'Floresta sombria onde espíritos malignos habitam.',
            resources: 'Madeira sombria, essência sombria, ervas venenosas',
            resource: { type: 'Essência Sombria', abundance: 'Comum' },
            owner: null
        },
        {
            id: 'silver_woods',
            name: 'Bosque Prateado',
            type: 'forest',
            x: 40,
            y: 5,
            levelRange: [6, 11],
            explored: false,
            description: 'Árvores com folhas prateadas que brilham ao luar.',
            resources: 'Madeira nobre, pólen dourado, cristal comum',
            resource: { type: 'Madeira Nobre', abundance: 'Abundante' },
            owner: null
        },
        {
            id: 'emerald_thicket',
            name: 'Matagal Esmeralda',
            type: 'forest',
            x: 85,
            y: 75,
            levelRange: [4, 9],
            explored: false,
            description: 'Floresta densa com vegetação exuberante e verde vibrante.',
            resources: 'Madeira comum, erva medicinal, cogumelo luminoso',
            resource: { type: 'Madeira Comum', abundance: 'Abundante' },
            owner: null
        },
        {
            id: 'twilight_grove',
            name: 'Bosque do Crepúsculo',
            type: 'forest',
            x: 95,
            y: 25,
            levelRange: [18, 25],
            explored: false,
            description: 'Bosque eterno onde o crepúsculo nunca termina.',
            resources: 'Madeira ancestral, musgo ancestral, cristal mágico',
            resource: { type: 'Madeira Ancestral', abundance: 'Muito Raro' },
            owner: null
        },
        {
            id: 'whispering_pines',
            name: 'Pinheiros Sussurrantes',
            type: 'forest',
            x: 5,
            y: 45,
            levelRange: [3, 8],
            explored: false,
            description: 'Floresta de pinheiros onde o vento carrega sussurros antigos.',
            resources: 'Madeira comum, raiz mágica, erva medicinal',
            resource: { type: 'Madeira Comum', abundance: 'Abundante' },
            owner: null
        },

        // Mountains - 12 minimum
        {
            id: 'iron_mountains',
            name: 'Montanhas de Ferro',
            type: 'mountain',
            x: 65,
            y: 25,
            levelRange: [3, 8],
            explored: false,
            description: 'Montanhas ricas em depósitos de ferro e pedras.',
            resources: 'Minério de ferro abundante, pedras brutas',
            resource: { type: 'Minério de Ferro', abundance: 'Abundante' },
            owner: null
        },
        {
            id: 'silver_peaks',
            name: 'Picos Prateados',
            type: 'mountain',
            x: 50,
            y: 10,
            levelRange: [6, 12],
            explored: false,
            description: 'Montanhas altas com veios de prata e cristais.',
            resources: 'Minério de prata, cristais mágicos, pedras rúnicas',
            resource: { type: 'Minério de Prata', abundance: 'Comum' },
            owner: null
        },
        {
            id: 'gold_mines',
            name: 'Minas de Ouro',
            type: 'mountain',
            x: 90,
            y: 60,
            levelRange: [10, 18],
            explored: false,
            description: 'Montanhas com ricos depósitos de ouro e gemas.',
            resources: 'Minério de ouro, cristais mágicos, gemas preciosas',
            resource: { type: 'Minério de Ouro', abundance: 'Raro' },
            owner: null
        },
        {
            id: 'mithril_depths',
            name: 'Profundezas de Mithril',
            type: 'mountain',
            x: 25,
            y: 95,
            levelRange: [15, 25],
            explored: false,
            description: 'Montanhas profundas onde se encontra o raro mithril.',
            resources: 'Minério de mithril, cristais divinos, essências concentradas',
            resource: { type: 'Minério de Mithril', abundance: 'Muito Raro' },
            owner: null
        },
        {
            id: 'platinum_quarry',
            name: 'Pedreira de Platina',
            type: 'mountain',
            x: 75,
            y: 45,
            levelRange: [12, 20],
            explored: false,
            description: 'Local de extração do nobre metal platina.',
            resources: 'Minério de platina, cristais de fogo, pedra lunar',
            resource: { type: 'Minério de Platina', abundance: 'Raro' },
            owner: null
        },
        {
            id: 'titanium_cliffs',
            name: 'Penhascos de Titânio',
            type: 'mountain',
            x: 80,
            y: 90,
            levelRange: [18, 28],
            explored: false,
            description: 'Penhascos íngremes ricos em titânio resistente.',
            resources: 'Minério de titânio, cristais de gelo, pedra rúnica',
            resource: { type: 'Minério de Titânio', abundance: 'Muito Raro' },
            owner: null
        },
        {
            id: 'crystal_peaks',
            name: 'Picos de Cristal',
            type: 'mountain',
            x: 35,
            y: 15,
            levelRange: [8, 14],
            explored: false,
            description: 'Montanhas cobertas de formações cristalinas naturais.',
            resources: 'Cristal comum, cristal mágico, pedra rúnica',
            resource: { type: 'Cristal Comum', abundance: 'Abundante' },
            owner: null
        },
        {
            id: 'copper_hills',
            name: 'Colinas de Cobre',
            type: 'mountain',
            x: 20,
            y: 35,
            levelRange: [2, 6],
            explored: false,
            description: 'Colinas baixas com depósitos de cobre e minerais básicos.',
            resources: 'Minério de ferro, pedra bruta, cristal comum',
            resource: { type: 'Minério de Ferro', abundance: 'Abundante' },
            owner: null
        },
        {
            id: 'obsidian_ridge',
            name: 'Cordilheira de Obsidiana',
            type: 'mountain',
            x: 95,
            y: 80,
            levelRange: [20, 30],
            explored: false,
            description: 'Formação vulcânica com obsidiana afiada e cristais de fogo.',
            resources: 'Obsidiana, cristal de fogo, essência sombria',
            resource: { type: 'Cristal de Fogo', abundance: 'Raro' },
            owner: null
        },
        {
            id: 'frozen_peaks',
            name: 'Picos Congelados',
            type: 'mountain',
            x: 5,
            y: 85,
            levelRange: [14, 22],
            explored: false,
            description: 'Montanhas eternamente cobertas de gelo e neve.',
            resources: 'Cristal de gelo, pedra lunar, minério de prata',
            resource: { type: 'Cristal de Gelo', abundance: 'Comum' },
            owner: null
        },
        {
            id: 'ember_mountains',
            name: 'Montanhas Brasas',
            type: 'mountain',
            x: 70,
            y: 5,
            levelRange: [16, 24],
            explored: false,
            description: 'Montanhas vulcânicas que emanam calor constante.',
            resources: 'Cristal de fogo, minério de ferro, pedra rúnica',
            resource: { type: 'Cristal de Fogo', abundance: 'Comum' },
            owner: null
        },
        {
            id: 'sapphire_caves',
            name: 'Cavernas de Safira',
            type: 'mountain',
            x: 55,
            y: 85,
            levelRange: [11, 17],
            explored: false,
            description: 'Cavernas ornamentadas com safiras azuis brilhantes.',
            resources: 'Cristal mágico, minério de prata, pedra lunar',
            resource: { type: 'Cristal Mágico', abundance: 'Raro' },
            owner: null
        },

        // Lakes - 4 minimum for fishing
        {
            id: 'crystal_lake',
            name: 'Lago Cristalino',
            type: 'lake',
            x: 40,
            y: 40,
            levelRange: [1, 10],
            explored: false,
            description: 'Lago sereno com águas cristalinas. Perfeito para pesca tranquila.',
            resources: 'Peixes cristalinos, cristais comuns, escamas de sereia',
            resource: { type: 'Peixe Cristalino', abundance: 'Raro' },
            owner: null
        },
        {
            id: 'azure_waters',
            name: 'Águas Azuladas',
            type: 'lake',
            x: 60,
            y: 55,
            levelRange: [5, 15],
            explored: false,
            description: 'Lago profundo com águas azul-turquesa. Rica vida aquática.',
            resources: 'Truta dourada, salmão real, cristais de gelo',
            resource: { type: 'Truta Dourada', abundance: 'Comum' },
            owner: null
        },
        {
            id: 'mystic_pond',
            name: 'Lagoa Mística',
            type: 'lake',
            x: 15,
            y: 55,
            levelRange: [10, 20],
            explored: false,
            description: 'Pequena lagoa com propriedades mágicas. Criaturas lendárias habitam suas profundezas.',
            resources: 'Leviatã jovem, escamas de sereia, cristal mágico',
            resource: { type: 'Leviatã Jovem', abundance: 'Muito Raro' },
            owner: null
        },
        {
            id: 'dragon_lake',
            name: 'Lago do Dragão',
            type: 'lake',
            x: 85,
            y: 50,
            levelRange: [18, 28],
            explored: false,
            description: 'Lago onde dragões antigos costumavam beber. Águas imbuídas com poder dracônico.',
            resources: 'Leviatã jovem, escamas de sereia, cristal divino',
            resource: { type: 'Escama de Sereia', abundance: 'Raro' },
            owner: null
        },

        // Hunting Grounds - 15 minimum
        {
            id: 'spider_lair',
            name: 'Toca das Aranhas',
            type: 'hunting-ground',
            x: 30,
            y: 20,
            levelRange: [2, 6],
            explored: false,
            description: 'Uma caverna infestada de aranhas gigantes. Teias bloqueiam muitas passagens.',
            resources: 'Fio de seda abundante, teias pegajosas',
            owner: null
        },
        {
            id: 'dark_cave',
            name: 'Caverna Escura',
            type: 'hunting-ground',
            x: 45,
            y: 75,
            levelRange: [4, 8],
            explored: false,
            description: 'Uma caverna profunda habitada por morcegos e esqueletos antigos.',
            resources: 'Olhos de morcego, pedras brutas, minerais básicos',
            owner: null
        },
        {
            id: 'orc_encampment',
            name: 'Acampamento Orc',
            type: 'hunting-ground',
            x: 55,
            y: 45,
            levelRange: [6, 10],
            explored: false,
            description: 'Um acampamento militar orc bem defendido. Guerreiros experientes patrulham a área.',
            resources: 'Corações de orc, materiais de guerra',
            owner: null
        },
        {
            id: 'undead_crypts',
            name: 'Criptas Amaldiçoadas',
            type: 'hunting-ground',
            x: 65,
            y: 80,
            levelRange: [12, 18],
            explored: false,
            description: 'Criptas antigas infestadas de mortos-vivos e magia sombria.',
            resources: 'Essência sombria, pedras rúnicas, artefatos amaldiçoados',
            owner: null
        },
        {
            id: 'dragon_peak',
            name: 'Pico do Dragão',
            type: 'hunting-ground',
            x: 90,
            y: 10,
            levelRange: [18, 25],
            explored: false,
            description: 'O pico mais alto da região. Um dragão jovem habita o topo.',
            resources: 'Minério de ouro precioso, escamas e olhos de dragão',
            owner: null
        },
        {
            id: 'goblin_outpost',
            name: 'Posto Avançado Goblin',
            type: 'hunting-ground',
            x: 25,
            y: 45,
            levelRange: [3, 7],
            explored: false,
            description: 'Fortificação goblin nas fronteiras. Bem guardada por soldados.',
            resources: 'Peles de goblin, garras de lince, ferro',
            owner: null
        },
        {
            id: 'wolves_den',
            name: 'Covil dos Lobos',
            type: 'hunting-ground',
            x: 10,
            y: 30,
            levelRange: [4, 9],
            explored: false,
            description: 'Território de uma matilha de lobos ferozes.',
            resources: 'Peles de lobo, dentes de sábia, ervas medicinais',
            owner: null
        },
        {
            id: 'troll_bridge',
            name: 'Ponte do Troll',
            type: 'hunting-ground',
            x: 75,
            y: 35,
            levelRange: [8, 14],
            explored: false,
            description: 'Ponte antiga guardada por trolls territoriais.',
            resources: 'Pedras brutas, chifres de minotauro, ferro',
            owner: null
        },
        {
            id: 'bandit_hideout',
            name: 'Covil dos Bandidos',
            type: 'hunting-ground',
            x: 50,
            y: 65,
            levelRange: [5, 11],
            explored: false,
            description: 'Esconderijo bem oculto de uma quadrilha de bandidos.',
            resources: 'Cordas, óleos refinados, moedas de ouro',
            owner: null
        },
        {
            id: 'ice_cavern',
            name: 'Caverna de Gelo',
            type: 'hunting-ground',
            x: 5,
            y: 70,
            levelRange: [10, 16],
            explored: false,
            description: 'Caverna congelada habitada por criaturas de gelo.',
            resources: 'Cristais de gelo, pedras lunares, essência sombria',
            owner: null
        },
        {
            id: 'fire_temple',
            name: 'Templo de Fogo',
            type: 'hunting-ground',
            x: 80,
            y: 70,
            levelRange: [14, 20],
            explored: false,
            description: 'Templo antigo dedicado aos elementais de fogo.',
            resources: 'Cristais de fogo, pedras rúnicas, essência concentrada',
            owner: null
        },
        {
            id: 'shadow_realm',
            name: 'Reino das Sombras',
            type: 'hunting-ground',
            x: 95,
            y: 95,
            levelRange: [20, 30],
            explored: false,
            description: 'Dimensão sombria onde as trevas ganham vida.',
            resources: 'Essência sombria, cristais sombrios, pedras rúnicas',
            owner: null
        },
        {
            id: 'ancient_ruins',
            name: 'Ruínas Antigas',
            type: 'hunting-ground',
            x: 40,
            y: 90,
            levelRange: [12, 18],
            explored: false,
            description: 'Ruínas de uma civilização perdida. Guardiões protegem seus segredos.',
            resources: 'Artefatos antigos, cristais mágicos, essência concentrada',
            owner: null
        },
        {
            id: 'vampire_castle',
            name: 'Castelo Vampiro',
            type: 'hunting-ground',
            x: 10,
            y: 5,
            levelRange: [16, 24],
            explored: false,
            description: 'Castelo gótico habitado por vampiros e seus servos.',
            resources: 'Essência sombria, sangue negro, cristais sombrios',
            owner: null
        },
        {
            id: 'demon_pit',
            name: 'Fosso Demoníaco',
            type: 'hunting-ground',
            x: 90,
            y: 95,
            levelRange: [22, 32],
            explored: false,
            description: 'Portal para os infernos. Demônios emergem constantemente.',
            resources: 'Essência demoníaca, cristais infernais, armas amaldiçoadas',
            owner: null
        },

        // Shops
        {
            id: 'desert_oasis',
            name: 'Oásis do Deserto',
            type: 'shop_consumables',
            x: 85,
            y: 30,
            levelRange: [8, 12],
            explored: true,
            description: 'Um refúgio no meio do deserto árido. Comerciantes vendem suprimentos.',
            resources: 'Suprimentos do deserto, poções especiais',
            initialStock: {
                'Poção de Cura Média': 5,
                'Poção de Força': 3,
                'Poção de Resistência': 3,
                'Rações de Viagem': 8,
                'Refeição Nutritiva': 4,
                'Antídoto Poderoso': 2,
                'Flechas Prata (10)': 4,
                'Peixe Grelhado': 6
            },
            stock: {},
            lastRestockTime: 0
        },
        {
            id: 'alchemist_hut',
            name: 'Cabana do Alquimista',
            type: 'shop_consumables',
            x: 35,
            y: 8,
            levelRange: [1, 10],
            explored: true,
            description: 'Um laboratório alquímico onde um sábio cria poções e elixires.',
            resources: 'Poções, ingredientes alquímicos',
            initialStock: {
                'Poção de Cura Menor': 8,
                'Poção de Cura Média': 5,
                'Poção de Força': 3,
                'Poção de Resistência': 3,
                'Poção de Agilidade': 3,
                'Antídoto': 6,
                'Antídoto Poderoso': 3,
                'Frasco Vazio': 15,
                'Erva Medicinal': 15,
                'Cogumelo Luminoso': 8
            },
            stock: {},
            lastRestockTime: 0
        },
        {
            id: 'material_trader',
            name: 'Comerciante de Materiais',
            type: 'shop_materials',
            x: 60,
            y: 90,
            levelRange: [1, 15],
            explored: true,
            description: 'Um comerciante especializado em materiais raros e componentes.',
            resources: 'Materiais de criação, componentes raros',
            initialStock: {
                'Corda': 10,
                'Cola Forte': 5,
                'Óleo Refinado': 8,
                'Pergaminho Vazio': 12,
                'Fio de Seda': 6,
                'Cristal Comum': 4,
                'Pedra Afiada': 8,
                'Erva Venenosa': 5,
                'Solda Mágica': 3,
                'Fita Reforçada': 7
            },
            stock: {},
            lastRestockTime: 0
        }
    ];

    // Enhanced Monsters
    const monsters = {
        'Goblin': {
            name: 'Goblin',
            hp: 30,
            minDamage: 5,
            maxDamage: 10,
            defense: 2,
            exp: 10,
            gold: 5,
            loot: {
                'Pele de Goblin': 0.8,
                'Ouro': 1,
                'Erva Medicinal': 0.3
            }
        },
        'Lobo Cinzento': {
            name: 'Lobo Cinzento',
            hp: 45,
            minDamage: 9,
            maxDamage: 16,
            defense: 3,
            exp: 18,
            gold: 8,
            loot: {
                'Pele de Lobo': 0.7,
                'Presa de Lobo': 0.5
            },
            statusEffectOnAttack: { type: 'bleed', chance: 0.15, stacks: 1 }
        },
        'Lobo Sombrio': {
            name: 'Lobo Sombrio',
            hp: 60,
            minDamage: 12,
            maxDamage: 20,
            defense: 4,
            exp: 25,
            gold: 12,
            loot: {
                'Pele de Lobo': 0.8,
                'Essência Sombria': 0.3
            },
            statusEffectOnAttack: { type: 'poison', chance: 0.2, duration: 2 }
        },
        'Urso Negro': {
            name: 'Urso Negro',
            hp: 80,
            minDamage: 15,
            maxDamage: 25,
            defense: 6,
            exp: 35,
            gold: 15,
            loot: {
                'Pele de Urso': 0.9,
                'Madeira Nobre': 0.4
            }
        },
        'Aranha Gigante': {
            name: 'Aranha Gigante',
            hp: 35,
            minDamage: 6,
            maxDamage: 11,
            defense: 3,
            exp: 12,
            gold: 6,
            loot: {
                'Teia Pegajosa': 0.9,
                'Fio de Seda': 0.4
            },
            statusEffectOnAttack: { type: 'poison', chance: 0.2, duration: 2 }
        },
        'Rainha Aranha': {
            name: 'Rainha Aranha',
            hp: 100,
            minDamage: 15,
            maxDamage: 25,
            defense: 5,
            exp: 50,
            gold: 25,
            loot: {
                'Fio de Seda': 0.9,
                'Essência Sombria': 0.5
            },
            statusEffectOnAttack: { type: 'poison', chance: 0.3, duration: 4 }
        },
        'Morcego Gigante': {
            name: 'Morcego Gigante',
            hp: 25,
            minDamage: 7,
            maxDamage: 12,
            defense: 1,
            exp: 8,
            gold: 3,
            loot: {
                'Olho de Morcego': 0.7,
                'Teia Pegajosa': 0.5
            }
        },
        'Orc Guerreiro': {
            name: 'Orc Guerreiro',
            hp: 60,
            minDamage: 12,
            maxDamage: 20,
            defense: 5,
            exp: 25,
            gold: 12,
            loot: {
                'Coração de Orc': 0.5,
                'Minério de Ferro': 0.3
            },
            statusEffectOnAttack: { type: 'stun', chance: 0.05 }
        },
        'Orc Xamã': {
            name: 'Orc Xamã',
            hp: 55,
            minDamage: 10,
            maxDamage: 18,
            defense: 3,
            exp: 30,
            gold: 15,
            loot: {
                'Essência Sombria': 0.6,
                'Raiz Mágica': 0.4
            },
            statusEffectOnAttack: { type: 'shock', chance: 0.15 }
        },
        'Esqueleto': {
            name: 'Esqueleto',
            hp: 50,
            minDamage: 10,
            maxDamage: 18,
            defense: 4,
            exp: 20,
            gold: 9,
            loot: {
                'Pedra Bruta': 0.4,
                'Frasco Vazio': 0.2
            }
        },
        'Esqueleto Guerreiro': {
            name: 'Esqueleto Guerreiro',
            hp: 75,
            minDamage: 15,
            maxDamage: 25,
            defense: 7,
            exp: 40,
            gold: 18,
            loot: {
                'Essência Sombria': 0.6,
                'Minério de Ferro': 0.4
            }
        },
        'Lich': {
            name: 'Lich',
            hp: 120,
            minDamage: 20,
            maxDamage: 35,
            defense: 8,
            exp: 80,
            gold: 40,
            loot: {
                'Essência Sombria': 0.9,
                'Cristal Mágico': 0.5,
                'Pedra Rúnica': 0.3
            },
            statusEffectOnAttack: { type: 'freeze', chance: 0.2 }
        },
        'Dragão Jovem': {
            name: 'Dragão Jovem',
            hp: 200,
            minDamage: 30,
            maxDamage: 50,
            defense: 15,
            exp: 150,
            gold: 50,
            loot: {
                'Escama de Dragão': 0.7,
                'Olho de Dragão': 0.3,
                'Minério de Ouro': 0.4,
                'Ouro': 1
            },
            statusEffectOnAttack: { type: 'shock', chance: 0.10 }
        },
        'Ent Ancião': {
            name: 'Ent Ancião',
            hp: 150,
            minDamage: 20,
            maxDamage: 35,
            defense: 10,
            exp: 75,
            gold: 30,
            loot: {
                'Madeira Ancestral': 0.8,
                'Raiz Mágica': 0.6
            }
        },
        'Sprites Cristalinos': {
            name: 'Sprites Cristalinos',
            hp: 40,
            minDamage: 8,
            maxDamage: 15,
            defense: 2,
            exp: 20,
            gold: 12,
            loot: {
                'Cristal Comum': 0.7,
                'Pólen Dourado': 0.3
            },
            statusEffectOnAttack: { type: 'freeze', chance: 0.1 }
        },
        // New monsters
        'Goblin Soldado': {
            name: 'Goblin Soldado',
            hp: 40,
            minDamage: 8,
            maxDamage: 14,
            defense: 4,
            exp: 15,
            gold: 8,
            loot: {
                'Pele de Goblin': 0.9,
                'Garra de Lince': 0.4,
                'Minério de Ferro': 0.2
            }
        },
        'Goblin Capitão': {
            name: 'Goblin Capitão',
            hp: 70,
            minDamage: 12,
            maxDamage: 20,
            defense: 6,
            exp: 30,
            gold: 18,
            loot: {
                'Pele de Goblin': 0.95,
                'Garra de Lince': 0.6,
                'Minério de Ferro': 0.4
            },
            statusEffectOnAttack: { type: 'stun', chance: 0.1 }
        },
        'Lobo Alfa': {
            name: 'Lobo Alfa',
            hp: 75,
            minDamage: 18,
            maxDamage: 28,
            defense: 5,
            exp: 45,
            gold: 22,
            loot: {
                'Pele de Lobo': 0.95,
                'Dente de Sábia': 0.7,
                'Erva Medicinal': 0.3
            },
            statusEffectOnAttack: { type: 'bleed', chance: 0.25, stacks: 2 }
        },
        'Lobo Selvagem': {
            name: 'Lobo Selvagem',
            hp: 50,
            minDamage: 10,
            maxDamage: 18,
            defense: 3,
            exp: 20,
            gold: 10,
            loot: {
                'Pele de Lobo': 0.8,
                'Dente de Sábia': 0.4,
                'Erva Medicinal': 0.2
            },
            statusEffectOnAttack: { type: 'bleed', chance: 0.15, stacks: 1 }
        },
        'Troll das Pedras': {
            name: 'Troll das Pedras',
            hp: 120,
            minDamage: 25,
            maxDamage: 40,
            defense: 12,
            exp: 60,
            gold: 30,
            loot: {
                'Pedra Bruta': 0.9,
                'Chifre de Minotauro': 0.5,
                'Minério de Ferro': 0.4
            },
            statusEffectOnAttack: { type: 'stun', chance: 0.2 }
        },
        'Troll Guerreiro': {
            name: 'Troll Guerreiro',
            hp: 95,
            minDamage: 20,
            maxDamage: 32,
            defense: 8,
            exp: 50,
            gold: 25,
            loot: {
                'Pedra Bruta': 0.8,
                'Chifre de Minotauro': 0.4,
                'Minério de Ferro': 0.3
            },
            statusEffectOnAttack: { type: 'stun', chance: 0.15 }
        },
        'Bandido': {
            name: 'Bandido',
            hp: 45,
            minDamage: 10,
            maxDamage: 16,
            defense: 3,
            exp: 18,
            gold: 15,
            loot: {
                'Corda': 0.6,
                'Óleo Refinado': 0.3,
                'Ouro': 1.2
            }
        },
        'Líder Bandido': {
            name: 'Líder Bandido',
            hp: 80,
            minDamage: 16,
            maxDamage: 26,
            defense: 5,
            exp: 40,
            gold: 35,
            loot: {
                'Corda': 0.8,
                'Óleo Refinado': 0.5,
                'Ouro': 1.5
            },
            statusEffectOnAttack: { type: 'poison', chance: 0.15, duration: 2 }
        },
        'Golem de Gelo': {
            name: 'Golem de Gelo',
            hp: 110,
            minDamage: 18,
            maxDamage: 30,
            defense: 10,
            exp: 55,
            gold: 25,
            loot: {
                'Cristal de Gelo': 0.8,
                'Pedra Lunar': 0.4,
                'Essência Sombria': 0.2
            },
            statusEffectOnAttack: { type: 'freeze', chance: 0.25 }
        },
        'Espírito Congelado': {
            name: 'Espírito Congelado',
            hp: 65,
            minDamage: 12,
            maxDamage: 22,
            defense: 3,
            exp: 35,
            gold: 18,
            loot: {
                'Cristal de Gelo': 0.6,
                'Pedra Lunar': 0.3,
                'Essência Sombria': 0.4
            },
            statusEffectOnAttack: { type: 'freeze', chance: 0.2 }
        },
        'Salamandra': {
            name: 'Salamandra',
            hp: 90,
            minDamage: 20,
            maxDamage: 32,
            defense: 6,
            exp: 50,
            gold: 28,
            loot: {
                'Cristal de Fogo': 0.7,
                'Pedra Rúnica': 0.4,
                'Essência Concentrada': 0.2
            },
            statusEffectOnAttack: { type: 'shock', chance: 0.15 }
        },
        'Elemental de Fogo': {
            name: 'Elemental de Fogo',
            hp: 75,
            minDamage: 16,
            maxDamage: 28,
            defense: 4,
            exp: 45,
            gold: 22,
            loot: {
                'Cristal de Fogo': 0.8,
                'Pedra Rúnica': 0.3,
                'Essência Concentrada': 0.3
            },
            statusEffectOnAttack: { type: 'shock', chance: 0.12 }
        },
        'Sombra Viva': {
            name: 'Sombra Viva',
            hp: 95,
            minDamage: 22,
            maxDamage: 36,
            defense: 2,
            exp: 70,
            gold: 35,
            loot: {
                'Essência Sombria': 0.9,
                'Cristal Sombrio': 0.4,
                'Pedra Rúnica': 0.3
            },
            statusEffectOnAttack: { type: 'poison', chance: 0.25, duration: 3 }
        },
        'Senhor das Sombras': {
            name: 'Senhor das Sombras',
            hp: 180,
            minDamage: 35,
            maxDamage: 55,
            defense: 8,
            exp: 120,
            gold: 60,
            loot: {
                'Essência Sombria': 0.95,
                'Cristal Sombrio': 0.7,
                'Pedra Rúnica': 0.5
            },
            statusEffectOnAttack: { type: 'poison', chance: 0.3, duration: 4 }
        }
    };

    // Enhanced Global Events System
    const GLOBAL_EVENTS = [
        {
            id: 'merchant_festival',
            name: 'Festival dos Comerciantes',
            description: 'Os comerciantes estão celebrando! Todos os preços estão 25% mais baratos.',
            duration: 3600000, // 1 hour
            effects: { shopPriceModifier: 0.75 },
            probability: 0.1,
            weatherDependent: false,
            timeDependent: false
        },
        {
            id: 'monster_invasion',
            name: 'Invasão de Monstros',
            description: 'Hordas de monstros invadiram a região! +50% EXP de combate, mas +25% dano recebido.',
            duration: 1800000, // 30 minutes
            effects: { combatExpModifier: 1.5, damageReceivedModifier: 1.25 },
            probability: 0.08,
            weatherDependent: false,
            timeDependent: true,
            preferredTime: 'night'
        },
        {
            id: 'resource_boom',
            name: 'Abundância de Recursos',
            description: 'A natureza é generosa! +100% recursos coletados e +50% EXP de coleta.',
            duration: 2700000, // 45 minutes
            effects: { resourceModifier: 2.0, gatheringExpModifier: 1.5 },
            probability: 0.12,
            weatherDependent: false,
            timeDependent: true,
            preferredTime: 'day'
        },
        {
            id: 'magic_surge',
            name: 'Surto Mágico',
            description: 'A magia é instável! +200% chance de efeitos de status e -50% tempo de criação.',
            duration: 1200000, // 20 minutes
            effects: { statusEffectModifier: 3.0, craftTimeModifier: 0.5 },
            probability: 0.06,
            weatherDependent: false,
            timeDependent: false
        },
        {
            id: 'blessed_day',
            name: 'Dia Abençoado',
            description: 'Os deuses sorriem para os aventureiros! +25% EXP em todas as atividades.',
            duration: 7200000, // 2 hours
            effects: { globalExpModifier: 1.25 },
            probability: 0.04,
            weatherDependent: false,
            timeDependent: true,
            preferredTime: 'day'
        },
        {
            id: 'rainy_day_fishing',
            name: 'Chuva Abundante',
            description: 'A chuva traz os peixes à superfície! +100% recursos de pesca e +50% EXP de pesca.',
            duration: 3600000, // 1 hour
            effects: { fishingResourceModifier: 2.0, fishingExpModifier: 1.5 },
            probability: 0.15,
            weatherDependent: true,
            requiredWeather: 'rain',
            timeDependent: false
        },
        {
            id: 'moonlit_night',
            name: 'Noite de Lua Cheia',
            description: 'A lua cheia desperta criaturas místicas! +75% chance de encontrar itens raros à noite.',
            duration: 4800000, // 80 minutes
            effects: { nightRareChanceModifier: 1.75 },
            probability: 0.08,
            weatherDependent: false,
            timeDependent: true,
            preferredTime: 'night'
        },
        {
            id: 'scorching_heat',
            name: 'Calor Escaldante',
            description: 'O sol intenso afeta todos! +15% fadiga por viagem, mas +25% EXP de mineração.',
            duration: 2400000, // 40 minutes
            effects: { fatigueModifier: 1.15, miningExpModifier: 1.25 },
            probability: 0.1,
            weatherDependent: false,
            timeDependent: true,
            preferredTime: 'day'
        }
    ];

    // --- Utility Functions ---
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function addBattleLog(message, type = 'log-normal') {
        const p = document.createElement('p');
        p.textContent = message;
        p.classList.add(type);
        battleLogEl.appendChild(p);
        battleLogEl.scrollTop = battleLogEl.scrollHeight;
    }

    function addGatheringLog(message, type = 'log-normal') {
        const p = document.createElement('p');
        p.textContent = message;
        p.classList.add(type);
        gatheringLog.appendChild(p);
        gatheringLog.scrollTop = gatheringLog.scrollHeight;
    }

    function addCastleLog(message, type = 'log-normal') {
        const p = document.createElement('p');
        p.textContent = message;
        p.classList.add(type);
        castleLogEl.appendChild(p);
        castleLogEl.scrollTop = castleLogEl.scrollHeight;
    }

    function addPassiveFarmLog(message, type = 'log-normal') {
        const p = document.createElement('p');
        p.textContent = message;
        p.classList.add(type);
        passiveFarmLog.appendChild(p);
        passiveFarmLog.scrollTop = passiveFarmLog.scrollHeight;
    }

    function showSection(sectionId) {
        document.querySelectorAll('.game-section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');
    }

    function showModal(modalElement) {
        modalElement.classList.remove('hidden');
    }

    function hideModal(modalElement) {
        modalElement.classList.add('hidden');
    }

    function formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        } else {
            return `${seconds}s`;
        }
    }

    // --- Day/Night and Weather System ---
    function updateGameTime() {
        const now = Date.now();
        const cycleProgress = (now - gameTime.dayStartTime) % gameTime.cycleDuration;
        const cyclePosition = cycleProgress / gameTime.cycleDuration;

        // Day/Night cycle: 0-0.5 = day, 0.5-1.0 = night
        const newPhase = cyclePosition < 0.5 ? 'day' : 'night';

        if (newPhase !== gameTime.currentPhase) {
            gameTime.currentPhase = newPhase;
            addBattleLog(`${newPhase === 'day' ? '🌅 Amanheceu!' : '🌙 Anoiteceu!'}`, 'log-info');
            updateMapVisuals();
        }

        // Weather changes every 30-90 minutes randomly
        if (now - gameTime.weatherChangeTime > getRandomInt(1800000, 5400000)) {
            const newWeather = Math.random() < 0.3 ? 'rain' : 'clear';
            if (newWeather !== gameTime.weather) {
                gameTime.weather = newWeather;
                gameTime.weatherChangeTime = now;
                addBattleLog(`${newWeather === 'rain' ? '🌧️ Começou a chover!' : '☀️ A chuva parou!'}`, 'log-info');
                updateMapVisuals();
            }
        }

        gameTime.lastPhaseCheck = now;
    }

    function updateMapVisuals() {
        // Update map appearance based on time and weather
        const mapElement = document.getElementById('map-inner-content');

        // Remove existing weather/time classes
        mapElement.classList.remove('day-time', 'night-time', 'rainy-weather', 'clear-weather');

        // Add current classes
        mapElement.classList.add(`${gameTime.currentPhase}-time`);
        mapElement.classList.add(`${gameTime.weather}-weather`);
    }

    function getTimeWeatherModifier(baseChance, eventConfig) {
        let modifier = 1.0;

        // Time-based modifications
        if (eventConfig.timeDependent && eventConfig.preferredTime) {
            if (gameTime.currentPhase === eventConfig.preferredTime) {
                modifier *= 2.0; // Double chance during preferred time
            } else {
                modifier *= 0.5; // Half chance during non-preferred time
            }
        }

        // Weather-based modifications
        if (eventConfig.weatherDependent && eventConfig.requiredWeather) {
            if (gameTime.weather === eventConfig.requiredWeather) {
                modifier *= 5.0; // Much higher chance with required weather
            } else {
                modifier *= 0.1; // Very low chance without required weather
            }
        }

        return baseChance * modifier;
    }

    // --- Player Name and Class System ---
    function startGame() {
        const name = playerNameInput.value.trim();
        if (name.length === 0) {
            alert('Por favor, digite seu nome!');
            return;
        }
        if (name.length > 20) {
            alert('Nome muito longo! Máximo 20 caracteres.');
            return;
        }

        player.name = name;
        hideModal(nameModal);
        initializeGame();
    }

    function selectClass(classId) {
        selectedClass = classId;
        classOptions.forEach(option => {
            option.classList.remove('selected');
            if (option.dataset.class === classId) {
                option.classList.add('selected');
            }
        });
        selectClassButton.disabled = false;
    }

    function confirmClassSelection() {
        if (!selectedClass) return;

        player.class = selectedClass;
        const classData = PLAYER_CLASSES[selectedClass];

        // Apply class bonuses
        if (classData.bonuses.strength) player.strength += classData.bonuses.strength;
        if (classData.bonuses.resistance) player.resistance += classData.bonuses.resistance;
        if (classData.bonuses.agility) player.agility += classData.bonuses.agility;
        if (classData.bonuses.intelligence) player.intelligence += classData.bonuses.intelligence;

        addBattleLog(`Você escolheu a classe ${classData.name}! Bônus aplicados.`, 'log-success');
        hideModal(classModal);
        updateCalculatedStats();
        updatePlayerStatsDisplay();
    }

    function showClassSelection() {
        if (player.level >= 5 && !player.class) {
            showModal(classModal);
        }
    }

    // --- Guild System ---
    function createGuild(guildName) {
        if (player.ownedGuild || player.guild) {
            addBattleLog('Você já pertence a uma guilda!', 'log-error');
            return false;
        }

        const guildId = `guild_${Date.now()}`;
        guilds[guildId] = {
            id: guildId,
            name: guildName,
            leader: player.name,
            members: [player.name],
            ownedLocations: [],
            createdAt: Date.now()
        };

        player.ownedGuild = guildId;
        player.guild = guildId;
        addBattleLog(`Guilda "${guildName}" criada com sucesso!`, 'log-success');
        return true;
    }

    function canConquerLocation(poi) {
        if (poi.type === 'capital') {
            // Capitals can only be conquered by guilds
            return player.guild && guilds[player.guild];
        }

        // Check individual player limits
        if (!player.guild) {
            return player.ownedLocations.length < maxPlayerLocations;
        }

        // Check guild limits
        const guild = guilds[player.guild];
        if (guild) {
            let locationCount = guild.ownedLocations.length;
            // Capitals count as 3 locations
            guild.ownedLocations.forEach(locId => {
                const loc = pointsOfInterest.find(p => p.id === locId);
                if (loc && loc.type === 'capital') {
                    locationCount += 2; // +2 because it already counts as 1
                }
            });
            return locationCount < maxGuildLocations;
        }

        return false;
    }

    // --- Global Events System (Enhanced) ---
    function triggerRandomEvent() {
        if (activeEvent) return; // Don't trigger if already have active event

        updateGameTime(); // Update time/weather first

        const randomChance = Math.random();
        let cumulativeProbability = 0;

        for (const event of GLOBAL_EVENTS) {
            const modifiedChance = getTimeWeatherModifier(event.probability, event);
            cumulativeProbability += modifiedChance;
            if (randomChance <= cumulativeProbability) {
                activateGlobalEvent(event);
                break;
            }
        }
    }

    function activateGlobalEvent(event) {
        activeEvent = { ...event, startTime: Date.now() };

        eventText.textContent = `${event.name}: ${event.description}`;
        globalEventsBanner.classList.remove('hidden');

        addBattleLog(`Evento Global: ${event.name}!`, 'log-info');
        addBattleLog(event.description, 'log-warning');

        // Set timeout to end the event
        setTimeout(() => {
            endGlobalEvent();
        }, event.duration);
    }

    function endGlobalEvent() {
        if (activeEvent) {
            addBattleLog(`O evento "${activeEvent.name}" terminou.`, 'log-info');
            activeEvent = null;
            globalEventsBanner.classList.add('hidden');
        }
    }

    function getEventModifier(type, baseValue = 1) {
        if (!activeEvent || !activeEvent.effects) return baseValue;

        const modifier = activeEvent.effects[type];
        return modifier ? baseValue * modifier : baseValue;
    }

    // Enhanced modifier functions for fishing and time-based effects
    function getFishingModifier(type, baseValue = 1) {
        let modifier = baseValue;

        // Apply active event modifiers
        if (activeEvent && activeEvent.effects) {
            if (type === 'resource' && activeEvent.effects.fishingResourceModifier) {
                modifier *= activeEvent.effects.fishingResourceModifier;
            }
            if (type === 'exp' && activeEvent.effects.fishingExpModifier) {
                modifier *= activeEvent.effects.fishingExpModifier;
            }
        }

        // Apply time-of-day bonuses for fishing
        if (gameTime.currentPhase === 'night') {
            modifier *= 1.2; // 20% bonus at night
        }

        // Apply weather bonuses for fishing
        if (gameTime.weather === 'rain') {
            modifier *= 1.5; // 50% bonus during rain
        }

        return modifier;
    }

    // --- Weapon Skills System ---
    function initializeWeaponSkill(skillId) {
        if (!player.weaponSkills[skillId]) {
            player.weaponSkills[skillId] = { level: 0, exp: 0, expToNext: 100 };
        }
    }

    function initializeGatheringSkill(skillId) {
        if (!player.gatheringSkills[skillId]) {
            player.gatheringSkills[skillId] = { level: 0, exp: 0, expToNext: 100 };
        }
    }

    function gainWeaponSkillExp(skillId, exp) {
        initializeWeaponSkill(skillId);
        const skill = player.weaponSkills[skillId];

        // Apply class bonuses
        if (player.class === 'warrior' && ['swords', 'axes', 'clubs', 'spears'].includes(skillId)) {
            exp = Math.floor(exp * (1 + PLAYER_CLASSES.warrior.bonuses.meleeExpBonus));
        }
        if (player.class === 'archer' && skillId === 'bows') {
            exp = Math.floor(exp * (1 + PLAYER_CLASSES.archer.bonuses.bowExpBonus));
        }

        // Apply global event modifier
        exp = Math.floor(exp * getEventModifier('globalExpModifier', 1));

        skill.exp += exp;

        let leveledUp = false;
        while (skill.exp >= skill.expToNext) {
            skill.level++;
            skill.exp -= skill.expToNext;
            skill.expToNext = Math.floor(skill.expToNext * 1.2);
            leveledUp = true;

            const skillConfig = WEAPON_SKILLS_CONFIG[skillId];
            if (skillConfig) {
                addBattleLog(`Perícia ${skillConfig.name} subiu para nível ${skill.level}!`, 'log-skill');

                // Check for new bonuses
                if (skillConfig.bonuses[skill.level]) {
                    const bonus = skillConfig.bonuses[skill.level];
                    addBattleLog(`Novo bônus desbloqueado: ${bonus.description}`, 'log-info');
                }
            }
        }

        if (leveledUp) {
            updateSkillsDisplay();
        }
    }

    function gainGatheringSkillExp(skillId, exp) {
        initializeGatheringSkill(skillId);
        const skill = player.gatheringSkills[skillId];

        // Apply class bonuses
        if (player.class === 'crafter') {
            exp = Math.floor(exp * (1 + PLAYER_CLASSES.crafter.bonuses.gatheringExpBonus));
        }

        // Apply specific skill bonuses based on activity
        if (skillId === 'fishing') {
            exp = Math.floor(exp * getFishingModifier('exp', 1));
        } else {
            // Apply general modifiers
            exp = Math.floor(exp * getEventModifier('gatheringExpModifier', 1));
        }

        exp = Math.floor(exp * getEventModifier('globalExpModifier', 1));

        skill.exp += exp;

        let leveledUp = false;
        while (skill.exp >= skill.expToNext) {
            skill.level++;
            skill.exp -= skill.expToNext;
            skill.expToNext = Math.floor(skill.expToNext * 1.3);
            leveledUp = true;

            const skillConfig = GATHERING_SKILLS_CONFIG[skillId];
            if (skillConfig) {
                addBattleLog(`Perícia ${skillConfig.name} subiu para nível ${skill.level}!`, 'log-skill');

                // Check for new bonuses
                if (skillConfig.bonuses[skill.level]) {
                    const bonus = skillConfig.bonuses[skill.level];
                    addBattleLog(`Novo bônus desbloqueado: ${bonus.description}`, 'log-info');
                }
            }
        }

        if (leveledUp) {
            updateSkillsDisplay();
        }
    }

    function getWeaponTypeFromItem(weapon) {
        return weapon.weaponType || 'unknown';
    }

    function getSkillBonus(skillType, skillId, bonusType) {
        const skills = skillType === 'weapon' ? player.weaponSkills : player.gatheringSkills;
        const skill = skills[skillId];
        const config = skillType === 'weapon' ? WEAPON_SKILLS_CONFIG[skillId] : GATHERING_SKILLS_CONFIG[skillId];

        if (!skill || !config) return 0;

        let totalBonus = 0;
        for (let level = 1; level <= skill.level; level++) {
            const bonus = config.bonuses[level];
            if (bonus && bonus.type === bonusType) {
                totalBonus += bonus.value;
            }
        }
        return totalBonus;
    }

    function hasSkillBonus(skillType, skillId, bonusType) {
        const skills = skillType === 'weapon' ? player.weaponSkills : player.gatheringSkills;
        const skill = skills[skillId];
        const config = skillType === 'weapon' ? WEAPON_SKILLS_CONFIG[skillId] : GATHERING_SKILLS_CONFIG[skillId];

        if (!skill || !config) return false;

        for (let level = 1; level <= skill.level; level++) {
            const bonus = config.bonuses[level];
            if (bonus && bonus.type === bonusType) {
                return true;
            }
        }
        return false;
    }

    // --- Combat System ---
    function calculatePlayerDamage() {
        const { attributePenalty } = calculateWeightPenalties();
        const effectiveStrength = Math.floor(player.strength * attributePenalty);

        let baseMinDmg = 5 + (effectiveStrength * 2);
        let baseMaxDmg = 10 + (effectiveStrength * 3);
        let finalMinDmg = baseMinDmg;
        let finalMaxDmg = baseMaxDmg;

        let fatiguePenalty = 1;
        if (player.fatigue > 60) {
            fatiguePenalty = 1 - Math.min(0.6, (player.fatigue - 60) / 100);
        }
        finalMinDmg = Math.floor(finalMinDmg * fatiguePenalty);
        finalMaxDmg = Math.floor(finalMaxDmg * fatiguePenalty);

        if (player.equippedWeapon) {
            const weapon = player.equippedWeapon;
            if ((weapon.type === 'weapon' && weapon.requiresAmmo) && !playerHasAmmo(weapon.requiresAmmo)) {
                addBattleLog(`Você não tem ${weapon.requiresAmmo}! Seu ataque é enfraquecido.`, 'log-warning');
            } else {
                finalMinDmg += weapon.minAttackBonus || 0;
                finalMaxDmg += weapon.maxAttackBonus || 0;

                if (weapon.requiresAmmo) {
                    // Check for ammo saving skill
                    const weaponType = getWeaponTypeFromItem(weapon);
                    if (weaponType === 'bows' && hasSkillBonus('weapon', 'bows', 'ammo_save')) {
                        const saveChance = getSkillBonus('weapon', 'bows', 'ammo_save');
                        if (Math.random() >= saveChance) {
                            removeItemFromInventory(weapon.requiresAmmo, 1);
                            addBattleLog(`Uma ${weapon.requiresAmmo.slice(0, -4)} foi usada.`, 'log-info');
                        } else {
                            addBattleLog(`Perícia salvou a munição!`, 'log-success');
                        }
                    } else {
                        removeItemFromInventory(weapon.requiresAmmo, 1);
                        addBattleLog(`Uma ${weapon.requiresAmmo.slice(0, -4)} foi usada.`, 'log-info');
                    }
                }

                // Apply weapon skill damage bonuses
                const weaponType = getWeaponTypeFromItem(weapon);
                const damageBonus = getSkillBonus('weapon', weaponType, 'damage_bonus');
                if (damageBonus > 0) {
                    finalMinDmg = Math.floor(finalMinDmg * (1 + damageBonus));
                    finalMaxDmg = Math.floor(finalMaxDmg * (1 + damageBonus));
                }
            }
        }

        let criticalChance = 0.05;
        if (player.equippedWeapon) {
            const weaponType = getWeaponTypeFromItem(player.equippedWeapon);
            criticalChance += getSkillBonus('weapon', weaponType, 'crit_chance');

            // Apply class bonuses
            if (player.class === 'archer' && weaponType === 'bows') {
                criticalChance += PLAYER_CLASSES.archer.bonuses.critChanceBonus;
            }
        }

        let criticalDamageMultiplier = 1.5;
        if (player.equippedWeapon) {
            const weaponType = getWeaponTypeFromItem(player.equippedWeapon);
            criticalDamageMultiplier += getSkillBonus('weapon', weaponType, 'crit_damage');
        }

        let damage = getRandomInt(finalMinDmg, finalMaxDmg);

        if (Math.random() < criticalChance) {
            damage = Math.floor(damage * criticalDamageMultiplier);
            addBattleLog('CRÍTICO!', 'log-success');

            // Check for critical-based weapon skills
            if (player.equippedWeapon) {
                const weaponType = getWeaponTypeFromItem(player.equippedWeapon);
                if (hasSkillBonus('weapon', weaponType, 'crit_bleed')) {
                    applyStatusEffect(currentMonster, 'bleed', 2, 3, 'weapon_skill');
                }
            }
        }

        return damage;
    }

    function calculatePlayerDefense() {
        const { attributePenalty } = calculateWeightPenalties();
        const effectiveResistance = Math.floor(player.resistance * attributePenalty);

        let totalDefense = player.defense + effectiveResistance;

        let fatiguePenalty = 1;
        if (player.fatigue > 60) {
            fatiguePenalty = 1 - Math.min(0.6, (player.fatigue - 60) / 100);
        }
        totalDefense = Math.floor(totalDefense * fatiguePenalty);

        if (player.equippedArmor) {
            totalDefense += player.equippedArmor.defenseBonus || 0;
        }

        const frozenEffect = player.activeEffects.find(e => e.type === 'freeze');
        if (frozenEffect) {
            totalDefense = Math.floor(totalDefense * 0.5);
        }

        return totalDefense;
    }

    function playerHasAmmo(ammoName) {
        const ammo = player.inventory.find(item => item.name === ammoName && item.type === 'ammo');
        return ammo && ammo.quantity > 0;
    }

    function startBattle(monster) {
        currentMonster = { ...monster, currentHp: monster.hp, activeEffects: [] };
        battleLogEl.innerHTML = '';
        monsterNameEl.textContent = currentMonster.name;
        monsterHpEl.textContent = `${currentMonster.currentHp}/${currentMonster.hp}`;
        playerHpEl.textContent = `${player.hp}/${player.maxHp}`;

        showSection('battle-area');
        addBattleLog(`Um ${currentMonster.name} apareceu!`, 'log-info');

        const { fatiguePenalty } = calculateWeightPenalties();
        const fatigueGained = Math.floor(player.fatiguePerBattle * fatiguePenalty);
        player.fatigue += fatigueGained;

        if (fatiguePenalty > 1) {
            addBattleLog(`O peso extra aumentou sua fadiga! (+${fatigueGained - player.fatiguePerBattle} fadiga)`, 'log-warning');
        }

        updatePlayerStatsDisplay();
        attackButton.disabled = false;
        fleeButton.disabled = false;
    }

    function playerAttack() {
        if (!player.isAlive || !currentMonster || attackButton.disabled) return;

        const playerStunned = player.activeEffects.some(e => e.type === 'stun' || e.type === 'freeze');
        const playerShocked = player.activeEffects.some(e => e.type === 'shock');

        if (playerStunned) {
            addBattleLog('Você está atordoado/congelado e não pode atacar!', 'log-warning');
            player.activeEffects.forEach(effect => {
                if (effect.type === 'stun' || effect.type === 'freeze') effect.duration--;
            });
            player.activeEffects = player.activeEffects.filter(e => e.duration > 0 || (e.type !== 'stun' && e.type !== 'freeze'));
            updatePlayerStatsDisplay();
            attackTimeoutId = setTimeout(monsterAttack, 1000);
            return;
        }

        if (playerShocked && Math.random() < 0.3) {
            addBattleLog('Você está chocado e falhou o ataque!', 'log-warning');
            player.activeEffects.forEach(effect => {
                if (effect.type === 'shock') effect.duration--;
            });
            player.activeEffects = player.activeEffects.filter(e => e.duration > 0 || e.type !== 'shock');
            updatePlayerStatsDisplay();
            attackTimeoutId = setTimeout(monsterAttack, 1000);
            return;
        }

        attackButton.disabled = true;
        fleeButton.disabled = true;

        let playerDamage = calculatePlayerDamage();
        let trueDamage = 0;

        // Check for armor piercing
        if (player.equippedWeapon) {
            const weaponType = getWeaponTypeFromItem(player.equippedWeapon);
            const armorPierce = getSkillBonus('weapon', weaponType, 'armor_pierce');
            if (armorPierce > 0) {
                const reducedDefense = Math.floor(currentMonster.defense * (1 - armorPierce));
                playerDamage = Math.max(1, playerDamage - reducedDefense);
                addBattleLog(`Ataque perfurante ignorou ${currentMonster.defense - reducedDefense} de defesa!`, 'log-info');
            } else {
                playerDamage = Math.max(1, playerDamage - currentMonster.defense);
            }
        } else {
            playerDamage = Math.max(1, playerDamage - currentMonster.defense);
        }

        currentMonster.currentHp -= (playerDamage + trueDamage);
        currentMonster.currentHp = Math.max(0, currentMonster.currentHp);

        monsterHpEl.textContent = `${currentMonster.currentHp}/${currentMonster.hp}`;
        addBattleLog(`Você atacou ${currentMonster.name} e causou ${playerDamage + trueDamage} de dano.`, 'log-damage');

        // Gain weapon skill experience based on hits
        if (player.equippedWeapon) {
            const weaponType = getWeaponTypeFromItem(player.equippedWeapon);
            gainWeaponSkillExp(weaponType, 2); // 2 exp per hit in active combat
        }

        // Apply weapon status effects
        if (player.equippedWeapon && player.equippedWeapon.statusEffectChance) {
            let statusChance = player.equippedWeapon.statusEffectChance.chance;

            // Apply class bonuses
            if (player.class === 'mage') {
                statusChance *= (1 + PLAYER_CLASSES.mage.bonuses.statusEffectBonus);
            }

            // Apply global event modifier
            statusChance *= getEventModifier('statusEffectModifier', 1);

            if (Math.random() < statusChance) {
                applyStatusEffect(currentMonster, player.equippedWeapon.statusEffectChance.type,
                    player.equippedWeapon.statusEffectChance.duration || player.equippedWeapon.statusEffectChance.stacks || 1,
                    STATUS_EFFECTS_CONFIG[player.equippedWeapon.statusEffectChance.type]?.damagePerTick || 0, 'weapon');
            }
        }

        if (currentMonster.currentHp <= 0) {
            addBattleLog(`${currentMonster.name} foi derrotado!`, 'log-success');
            setTimeout(() => {
                gainExpAndGold(currentMonster.exp, currentMonster.gold);
                handleLootDrop(currentMonster);

                // Add to location experience
                const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
                if (currentPoi) {
                    if (!player.locationExperience[currentPoi.id]) {
                        player.locationExperience[currentPoi.id] = { battles: 0, monstersKilled: [], lootFound: [] };
                    }
                    player.locationExperience[currentPoi.id].battles++;
                    if (!player.locationExperience[currentPoi.id].monstersKilled.includes(currentMonster.name)) {
                        player.locationExperience[currentPoi.id].monstersKilled.push(currentMonster.name);
                    }
                }

                endBattle('victory');
            }, 1000);
        } else {
            processMonsterStatusEffects();
            if (currentMonster.currentHp <= 0) {
                addBattleLog(`${currentMonster.name} foi derrotado por efeitos de status!`, 'log-success');
                setTimeout(() => {
                    gainExpAndGold(currentMonster.exp, currentMonster.gold);
                    handleLootDrop(currentMonster);
                    endBattle('victory');
                }, 500);
            } else {
                attackTimeoutId = setTimeout(monsterAttack, 1000);
            }
        }
    }

    function monsterAttack() {
        if (!player.isAlive || !currentMonster) {
            clearTimeout(attackTimeoutId);
            return;
        }

        const monsterStunned = currentMonster.activeEffects.some(e => e.type === 'stun' || e.type === 'freeze');
        const monsterShocked = currentMonster.activeEffects.some(e => e.type === 'shock');

        if (monsterStunned) {
            addBattleLog(`${currentMonster.name} está atordoado/congelado e não pode atacar!`, STATUS_EFFECTS_CONFIG['stun'].logClass);
            currentMonster.activeEffects.forEach(effect => {
                if (effect.type === 'stun' || effect.type === 'freeze') effect.duration--;
            });
            currentMonster.activeEffects = currentMonster.activeEffects.filter(e => e.duration > 0 || (e.type !== 'stun' && e.type !== 'freeze'));
            attackButton.disabled = false;
            fleeButton.disabled = false;
            return;
        }

        if (monsterShocked && Math.random() < 0.3) {
            addBattleLog(`${currentMonster.name} está chocado e falhou o ataque!`, STATUS_EFFECTS_CONFIG['shock'].logClass);
            currentMonster.activeEffects.forEach(effect => {
                if (effect.type === 'shock') effect.duration--;
            });
            currentMonster.activeEffects = currentMonster.activeEffects.filter(e => e.duration > 0 || e.type !== 'shock');
            attackButton.disabled = false;
            fleeButton.disabled = false;
            return;
        }

        let monsterDamage = getRandomInt(currentMonster.minDamage, currentMonster.maxDamage);
        let playerDefense = calculatePlayerDefense();

        const { attributePenalty } = calculateWeightPenalties();
        const effectiveAgility = Math.floor(player.agility * attributePenalty);

        let evasionChance = 0;
        if (effectiveAgility > 1) evasionChance += (effectiveAgility - 1) * 0.01;

        if (Math.random() < evasionChance) {
            addBattleLog(`${currentMonster.name} atacou, mas você evitou o golpe!`, 'log-info');
            attackButton.disabled = false;
            fleeButton.disabled = false;
            return;
        }

        // Apply class damage reduction
        if (player.class === 'warrior') {
            monsterDamage = Math.floor(monsterDamage * (1 - PLAYER_CLASSES.warrior.bonuses.damageReduction));
        }

        // Apply global event modifier
        monsterDamage = Math.floor(monsterDamage * getEventModifier('damageReceivedModifier', 1));

        monsterDamage = Math.max(1, monsterDamage - playerDefense);
        player.hp -= monsterDamage;
        player.hp = Math.max(0, player.hp);

        playerHpEl.textContent = `${player.hp}/${player.maxHp}`;
        addBattleLog(`${currentMonster.name} atacou você e causou ${monsterDamage} de dano.`, 'log-monster-damage');

        // Apply monster status effects
        if (currentMonster.statusEffectOnAttack) {
            let statusChance = currentMonster.statusEffectOnAttack.chance;

            // Apply mage resistance
            if (player.class === 'mage') {
                statusChance *= (1 - PLAYER_CLASSES.mage.bonuses.statusResistance);
            }

            if (Math.random() < statusChance) {
                applyStatusEffect(player, currentMonster.statusEffectOnAttack.type,
                    currentMonster.statusEffectOnAttack.duration || currentMonster.statusEffectOnAttack.stacks || 1,
                    STATUS_EFFECTS_CONFIG[currentMonster.statusEffectOnAttack.type]?.damagePerTick || 0, 'monster');
            }
        }

        if (player.hp <= 0) {
            addBattleLog('Você foi derrotado!', 'log-error');
            player.isAlive = false;
            setTimeout(endGame, 1500);
        } else {
            attackButton.disabled = false;
            fleeButton.disabled = false;
        }
    }

    function fleeBattle() {
        addBattleLog('Você tentou fugir...', 'log-warning');
        if (Math.random() < 0.5) {
            addBattleLog('Você conseguiu fugir!', 'log-success');
            endBattle('flee');
        } else {
            addBattleLog('Falha ao fugir! O monstro ataca novamente.', 'log-error');
            setTimeout(monsterAttack, 500);
        }
    }

    function endBattle(result) {
        clearTimeout(attackTimeoutId);
        currentMonster = null;
        showSection('map-area');

        const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
        if (currentPoi && (currentPoi.type === 'hunting-ground' || currentPoi.type === 'cave')) {
            currentPoi.explored = true;
        }
        updatePoiMarkers();
        updatePlayerStatsDisplay();
    }

    function gainExpAndGold(exp, gold, isPassive = false) {
        // Apply global event modifier
        exp = Math.floor(exp * getEventModifier('combatExpModifier', 1));
        exp = Math.floor(exp * getEventModifier('globalExpModifier', 1));

        if (isPassive) {
            player.passiveFarmData.totalExpGained += exp;
            player.passiveFarmData.totalGoldGained += gold;
        }
        player.exp += exp;
        player.gold += gold;
        addBattleLog(`Você ganhou ${exp} EXP e ${gold} Ouro.`, 'log-exp');
        checkLevelUp();
        updatePlayerStatsDisplay();
    }

    function handleLootDrop(monster, isPassive = false) {
        if (monster.loot) {
            for (const itemName in monster.loot) {
                let baseDropChance = monster.loot[itemName];

                // Apply rarity modifier only for hunting, not for passive gathering areas
                if (!isPassive && items[itemName] && items[itemName].rarity) {
                    const rarityInfo = ITEM_RARITIES[items[itemName].rarity];
                    if (rarityInfo) {
                        baseDropChance *= rarityInfo.dropModifier;
                    }
                }

                // Apply night rare chance modifier
                if (gameTime.currentPhase === 'night' && activeEvent && activeEvent.effects.nightRareChanceModifier) {
                    const item = items[itemName];
                    if (item && (item.rarity === 'rare' || item.rarity === 'ultra-rare' || item.rarity === 'legendary' || item.rarity === 'epic' || item.rarity === 'mythic' || item.rarity === 'divine')) {
                        baseDropChance *= activeEvent.effects.nightRareChanceModifier;
                    }
                }

                if (Math.random() < baseDropChance) {
                    if (itemName === 'Ouro') {
                        let droppedGold = getRandomInt(1, 5);
                        if (isPassive) droppedGold = Math.max(1, Math.floor(droppedGold / 10));
                        player.gold += droppedGold;
                        if (isPassive) player.passiveFarmData.totalGoldGained += droppedGold;
                        addBattleLog(`Você encontrou ${droppedGold} ouro adicional!`, 'log-gold');
                    } else {
                        const added = addItemToInventory(itemName, 1, isPassive);
                        if (added && isPassive) {
                            player.passiveFarmData.itemsCollected[itemName] = (player.passiveFarmData.itemsCollected[itemName] || 0) + 1;
                        }
                        if (added) {
                            addBattleLog(`Você encontrou ${itemName}!`, 'log-item');

                            // Add to location experience
                            const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
                            if (currentPoi && !isPassive) {
                                if (!player.locationExperience[currentPoi.id]) {
                                    player.locationExperience[currentPoi.id] = { battles: 0, monstersKilled: [], lootFound: [] };
                                }
                                if (!player.locationExperience[currentPoi.id].lootFound.includes(itemName)) {
                                    player.locationExperience[currentPoi.id].lootFound.push(itemName);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function checkLevelUp() {
        let levelUpOccurred = false;
        while (player.exp >= player.expToNextLevel) {
            player.level++;
            player.exp -= player.expToNextLevel;
            player.expToNextLevel = Math.floor(player.expToNextLevel * 1.5);
            player.skillPoints += 1;
            player.maxHp += 10;
            player.hp = player.maxHp;
            addBattleLog(`Parabéns! Você alcançou o Nível ${player.level}!`, 'log-levelup');
            addBattleLog(`Você ganhou 1 ponto de habilidade!`, 'log-info');
            levelUpOccurred = true;

            // Check if player can choose class
            if (player.level === 5 && !player.class) {
                classSelectionArea.classList.remove('hidden');
                addBattleLog('Você pode escolher uma classe agora! Abra o menu de Status (S).', 'log-info');
            }

            if (player.isPassiveFarming) {
                player.passiveFarmData.levelUpsDuringFarm++;
                const levelUpMessage = `Você subiu para o Nível ${player.level}!`;
                const p = document.createElement('p');
                p.textContent = levelUpMessage;
                p.classList.add('log-levelup');
                levelupResults.appendChild(p);
            }
        }
        if (levelUpOccurred) {
            updateCalculatedStats();
        }
        updatePlayerStatsDisplay();
    }

    // --- Status Effects System ---
    function applyStatusEffect(target, effectType, durationOrStacks, damagePerTick = 0, source = 'weapon') {
        const effectConfig = STATUS_EFFECTS_CONFIG[effectType];
        if (!effectConfig) {
            console.warn(`Unknown status effect: ${effectType}`);
            return;
        }

        let existingEffect = target.activeEffects.find(e => e.type === effectType.split('_')[0]);

        if (effectType.startsWith('bleed')) {
            const bleedLevel = parseInt(effectType.split('_')[1] || 1);

            if (existingEffect) {
                if (existingEffect.level < bleedLevel) {
                    existingEffect.level = bleedLevel;
                    existingEffect.stacks += durationOrStacks;
                    existingEffect.damagePerTick = STATUS_EFFECTS_CONFIG[`bleed_${bleedLevel}`]?.damagePerTick || effectConfig.damagePerTick;
                    existingEffect.duration = STATUS_EFFECTS_CONFIG[`bleed_${bleedLevel}`]?.durationPerStack * existingEffect.stacks;
                    addBattleLog(`${target.name} está ${effectConfig.name} (Nível ${existingEffect.level})!`, effectConfig.logClass);
                } else {
                    existingEffect.stacks += durationOrStacks;
                    existingEffect.duration = effectConfig.durationPerStack * existingEffect.stacks;
                    addBattleLog(`${target.name} está mais ${effectConfig.name}! Stacks: ${existingEffect.stacks}`, effectConfig.logClass);
                }
            } else {
                target.activeEffects.push({
                    name: effectConfig.name,
                    type: 'bleed',
                    level: bleedLevel,
                    stacks: durationOrStacks,
                    duration: effectConfig.durationPerStack * durationOrStacks,
                    damagePerTick: effectConfig.damagePerTick,
                    source: source
                });
                addBattleLog(`${target.name} está ${effectConfig.name}!`, effectConfig.logClass);
            }
        } else {
            if (existingEffect) {
                existingEffect.duration += durationOrStacks;
                addBattleLog(`${target.name} está mais ${effectConfig.name}!`, effectConfig.logClass);
            } else {
                target.activeEffects.push({
                    name: effectConfig.name,
                    type: effectType,
                    duration: durationOrStacks || effectConfig.duration,
                    damagePerTick: damagePerTick || effectConfig.damagePerTick || 0,
                    source: source
                });
                addBattleLog(`${target.name} está ${effectConfig.name}!`, effectConfig.logClass);
            }
        }
        updatePlayerStatsDisplay();
    }

    function removeStatusEffect(target, effectType) {
        target.activeEffects = target.activeEffects.filter(effect => {
            if (effectType === 'bleed' && effect.type === 'bleed') {
                return false;
            }
            return effect.type !== effectType;
        });
        updatePlayerStatsDisplay();
    }

    function processStatusEffects() {
        player.activeEffects.forEach(effect => {
            if (effect.type === 'poison' || effect.type === 'bleed') {
                player.hp -= effect.damagePerTick;
                player.hp = Math.max(0, player.hp);
                addBattleLog(`Você sofreu ${effect.damagePerTick} de dano de ${effect.name}. HP: ${player.hp}/${player.maxHp}`, effect.logClass);
                effect.duration--;

                if (player.hp <= 0) {
                    addBattleLog('Você foi derrotado pelos efeitos de status!', 'log-error');
                    player.isAlive = false;
                    endGame();
                    return;
                }
            }
        });

        player.activeEffects = player.activeEffects.filter(effect => {
            const shouldRemove = (effect.duration <= 0 && (effect.type === 'poison' || effect.type === 'bleed'));
            if (shouldRemove) {
                addBattleLog(`${effect.name} expirou.`, 'log-info');
            }
            return !shouldRemove;
        });

        if (currentMonster) {
            currentMonster.activeEffects = currentMonster.activeEffects.filter(effect => {
                const shouldRemove = effect.duration <= 0;
                if (shouldRemove) {
                    addBattleLog(`${effect.name} em ${currentMonster.name} expirou.`, STATUS_EFFECTS_CONFIG[effect.type].logClass);
                }
                return !shouldRemove;
            });
        }
        updatePlayerStatsDisplay();
    }

    function processMonsterStatusEffects() {
        if (!currentMonster) return;

        currentMonster.activeEffects.forEach(effect => {
            if (effect.type === 'poison' || effect.type === 'bleed') {
                currentMonster.currentHp -= effect.damagePerTick;
                currentMonster.currentHp = Math.max(0, currentMonster.currentHp);
                addBattleLog(`${currentMonster.name} sofreu ${effect.damagePerTick} de dano de ${effect.name}. HP: ${currentMonster.currentHp}/${currentMonster.hp}`, STATUS_EFFECTS_CONFIG[effect.type].logClass);
                effect.duration--;
            }
            if (effect.type === 'stun' || effect.type === 'freeze' || effect.type === 'shock') {
                effect.duration--;
            }
        });

        currentMonster.activeEffects = currentMonster.activeEffects.filter(effect => effect.duration > 0);
        monsterHpEl.textContent = `${currentMonster.currentHp}/${currentMonster.hp}`;
    }

    // --- Enhanced Resource Gathering System ---
    function startActiveGathering(poi) {
        if (!poi.resource) return;

        // Check for required tools
        let requiredTool;
        if (poi.type === 'forest') {
            requiredTool = 'Machado de Lenhador';
        } else if (poi.type === 'mountain') {
            requiredTool = 'Picareta de Ferro';
        } else if (poi.type === 'lake') {
            requiredTool = 'Vara de Pesca Simples';
            // Check for better fishing rods
            if (player.inventory.find(item => item.name === 'Vara do Mestre Pescador')) {
                requiredTool = 'Vara do Mestre Pescador';
            } else if (player.inventory.find(item => item.name === 'Vara de Pesca Élfica')) {
                requiredTool = 'Vara de Pesca Élfica';
            }
        }

        const playerTool = player.inventory.find(item => item.name === requiredTool);
        if (!playerTool) {
            addBattleLog(`Você precisa de um ${requiredTool} para coletar recursos aqui!`, 'log-error');
            return;
        }

        currentGatheringResource = {
            name: poi.resource.type,
            maxHp: 100,
            currentHp: 100,
            poi: poi,
            tool: requiredTool
        };

        gatheringTitle.textContent = `Coletando em ${poi.name}`;
        currentResourceName.textContent = poi.resource.type;
        resourceHp.textContent = currentGatheringResource.currentHp;
        currentTool.textContent = requiredTool;
        gatheringLog.innerHTML = '';

        // Setup canvas
        resourceGatheringCanvas.width = resourceGatheringCanvas.parentElement.clientWidth;
        resourceGatheringCanvas.height = resourceGatheringCanvas.parentElement.clientHeight;

        showSection('resource-gathering-area');
        addGatheringLog(`Iniciando coleta de ${poi.resource.type}...`, 'log-info');
        addGatheringLog('Clique nos pontos que aparecem para coletar o recurso!', 'log-info');

        spawnGatheringPoints();
        gatheringInterval = setInterval(spawnGatheringPoints, 2000);
    }

    function spawnGatheringPoints() {
        // Remove old points
        gatheringPoints.forEach(point => {
            if (point.element && point.element.parentNode) {
                point.element.parentNode.removeChild(point.element);
            }
        });
        gatheringPoints = [];

        // Spawn new points
        const numPoints = getRandomInt(2, 4);
        const canvasRect = resourceGatheringCanvas.getBoundingClientRect();

        for (let i = 0; i < numPoints; i++) {
            const point = {
                x: getRandomInt(30, canvasRect.width - 30),
                y: getRandomInt(30, canvasRect.height - 30),
                element: null
            };

            const pointElement = document.createElement('div');
            pointElement.className = 'resource-point';
            pointElement.style.left = point.x + 'px';
            pointElement.style.top = point.y + 'px';
            pointElement.addEventListener('click', () => hitGatheringPoint(point));

            resourceGatheringCanvas.parentElement.appendChild(pointElement);
            point.element = pointElement;
            gatheringPoints.push(point);

            // Auto-remove points after 3 seconds
            setTimeout(() => {
                if (point.element && point.element.parentNode) {
                    point.element.parentNode.removeChild(point.element);
                }
            }, 3000);
        }
    }

    function hitGatheringPoint(point) {
        if (!currentGatheringResource) return;

        // Remove the point
        if (point.element && point.element.parentNode) {
            point.element.parentNode.removeChild(point.element);
        }

        // Calculate damage based on tool and skills
        let damage = 10;

        // Apply skill bonuses
        if (currentGatheringResource.poi.type === 'forest') {
            const gatheringSpeedBonus = getSkillBonus('gathering', 'lumberjack', 'gathering_speed');
            damage = Math.floor(damage * (1 + gatheringSpeedBonus));
        } else if (currentGatheringResource.poi.type === 'mountain') {
            const gatheringSpeedBonus = getSkillBonus('gathering', 'mining', 'gathering_speed');
            damage = Math.floor(damage * (1 + gatheringSpeedBonus));
        } else if (currentGatheringResource.poi.type === 'lake') {
            const gatheringSpeedBonus = getSkillBonus('gathering', 'fishing', 'gathering_speed');
            damage = Math.floor(damage * (1 + gatheringSpeedBonus));
        }

        currentGatheringResource.currentHp -= damage;
        currentGatheringResource.currentHp = Math.max(0, currentGatheringResource.currentHp);
        resourceHp.textContent = currentGatheringResource.currentHp;

        addGatheringLog(`Você coletou! Dano: ${damage}`, 'log-success');

        if (currentGatheringResource.currentHp <= 0) {
            // Resource depleted, give rewards
            clearInterval(gatheringInterval);

            const areaContent = AREA_CONTENT[currentGatheringResource.poi.id];
            const possibleResources = areaContent ? areaContent.resources : [currentGatheringResource.name];

            // Give rewards - only 1 resource as requested
            const resourceName = possibleResources[getRandomInt(0, possibleResources.length - 1)];
            let quantity = 1;

            // Apply class bonuses
            if (player.class === 'crafter') {
                if (Math.random() < PLAYER_CLASSES.crafter.bonuses.resourceBonus) {
                    quantity++;
                }
            }

            // Apply skill bonuses
            let skillId;
            if (currentGatheringResource.poi.type === 'forest') {
                skillId = 'lumberjack';
            } else if (currentGatheringResource.poi.type === 'mountain') {
                skillId = 'mining';
            } else if (currentGatheringResource.poi.type === 'lake') {
                skillId = 'fishing';
                quantity = Math.floor(quantity * getFishingModifier('resource', 1));
            }

            if (skillId) {
                const resourceBonus = getSkillBonus('gathering', skillId, 'resource_bonus');
                if (Math.random() < resourceBonus) {
                    quantity++;
                }
            }

            // Apply global event modifier
            if (currentGatheringResource.poi.type !== 'lake') {
                quantity = Math.floor(quantity * getEventModifier('resourceModifier', 1));
            }

            if (addItemToInventory(resourceName, quantity)) {
                addGatheringLog(`Você coletou ${quantity}x ${resourceName}!`, 'log-item');
            }

            // Give skill experience
            let skillToLevel;
            if (currentGatheringResource.poi.type === 'forest') {
                skillToLevel = 'lumberjack';
            } else if (currentGatheringResource.poi.type === 'mountain') {
                skillToLevel = 'mining';
            } else if (currentGatheringResource.poi.type === 'lake') {
                skillToLevel = 'fishing';
            }

            if (skillToLevel) {
                const expGain = GATHERING_SKILLS_CONFIG[skillToLevel].expPerHour * 0.1; // 10% of hourly exp
                gainGatheringSkillExp(skillToLevel, expGain);
            }

            addGatheringLog('Recurso esgotado! Você pode coletar novamente mais tarde.', 'log-info');

            setTimeout(() => {
                stopActiveGathering();
            }, 2000);
        }
    }

    function stopActiveGathering() {
        clearInterval(gatheringInterval);

        // Clean up gathering points
        gatheringPoints.forEach(point => {
            if (point.element && point.element.parentNode) {
                point.element.parentNode.removeChild(point.element);
            }
        });
        gatheringPoints = [];

        currentGatheringResource = null;
        showSection('map-area');
        updatePlayerStatsDisplay();
    }

    // --- Castle Conquest System ---
    function startCastleConquest(castle) {
        if (player.isConqueringCastle) return;

        // Check if player can conquer this location
        if (!canConquerLocation(castle)) {
            if (castle.type === 'capital' && !player.guild) {
                addBattleLog('Capitais só podem ser conquistadas por guildas!', 'log-error');
            } else if (castle.type === 'capital' && player.guild) {
                const guild = guilds[player.guild];
                let locationCount = guild.ownedLocations.length;
                guild.ownedLocations.forEach(locId => {
                    const loc = pointsOfInterest.find(p => p.id === locId);
                    if (loc && loc.type === 'capital') locationCount += 2;
                });
                addBattleLog(`Sua guilda atingiu o limite de localizações (${locationCount}/${maxGuildLocations})!`, 'log-error');
            } else {
                addBattleLog(`Você atingiu o limite de localizações conquistadas!`, 'log-error');
            }
            return;
        }

        player.isConqueringCastle = true;
        player.conquestData = {
            castleId: castle.id,
            startTime: Date.now(),
            progress: 0
        };

        const conquestTime = castle.type === 'capital' ? CAPITAL_CONQUEST_TIME_MS : CASTLE_CONQUEST_TIME_MS;

        castleNameEl.textContent = `Conquistando ${castle.name}`;
        castleOwnerEl.textContent = castle.owner || 'Nenhum';
        conquestProgressEl.textContent = '0';
        conquestTimeEl.textContent = formatTime(conquestTime);
        castleLogEl.innerHTML = '';

        showSection('castle-conquest-area');
        addCastleLog(`Iniciando conquista de ${castle.name}...`, 'log-info');
        if (castle.type === 'capital') {
            addCastleLog('A conquista de uma capital levará 12 horas para ser concluída.', 'log-warning');
        } else {
            addCastleLog('A conquista levará 1 hora para ser concluída.', 'log-warning');
        }

        startConquestButton.classList.add('hidden');
        stopConquestButton.classList.remove('hidden');

        updateConquestProgress();
    }

    function updateConquestProgress() {
        if (!player.isConqueringCastle) return;

        const castle = pointsOfInterest.find(p => p.id === player.conquestData.castleId);
        const conquestTime = castle.type === 'capital' ? CAPITAL_CONQUEST_TIME_MS : CASTLE_CONQUEST_TIME_MS;

        const now = Date.now();
        const elapsed = now - player.conquestData.startTime;
        const progress = Math.min(100, Math.floor((elapsed / conquestTime) * 100));
        const remaining = Math.max(0, conquestTime - elapsed);

        player.conquestData.progress = progress;
        conquestProgressEl.textContent = progress;
        conquestTimeEl.textContent = formatTime(remaining);

        if (progress >= 100) {
            completeCastleConquest();
        } else {
            setTimeout(updateConquestProgress, 1000);
        }
    }

    function completeCastleConquest() {
        const castle = pointsOfInterest.find(p => p.id === player.conquestData.castleId);
        if (!castle) return;

        if (castle.type === 'capital' && player.guild) {
            // Capital conquered by guild
            castle.owner = guilds[player.guild].name;
            guilds[player.guild].ownedLocations.push(castle.id);
            addCastleLog(`${castle.name} foi conquistada pela guilda ${guilds[player.guild].name}!`, 'log-success');
        } else {
            // Regular castle or location conquered by player
            castle.owner = player.name;
            if (castle.type === 'castle') {
                player.ownedCastles.push(castle.id);
            } else {
                player.ownedLocations.push(castle.id);
            }
            addCastleLog(`${castle.name} foi conquistado com sucesso!`, 'log-success');
        }

        addCastleLog(`Você agora controla este território e receberá recursos a cada 24 horas.`, 'log-info');
        player.isConqueringCastle = false;

        startConquestButton.classList.remove('hidden');
        stopConquestButton.classList.add('hidden');

        updatePoiMarkers();
        setTimeout(() => {
            showSection('map-area');
        }, 3000);
    }

    function stopCastleConquest() {
        player.isConqueringCastle = false;
        addCastleLog('Conquista cancelada.', 'log-warning');

        startConquestButton.classList.remove('hidden');
        stopConquestButton.classList.add('hidden');
    }

    function leaveCastle() {
        if (player.isConqueringCastle) {
            stopCastleConquest();
        }
        showSection('map-area');
    }

    function processCastleIncome() {
        const now = Date.now();

        // Process player's castles
        player.ownedCastles.forEach(castleId => {
            const castle = pointsOfInterest.find(p => p.id === castleId);
            if (!castle) return;

            if (!castle.lastIncome || (now - castle.lastIncome >= CASTLE_INCOME_INTERVAL_MS)) {
                generateCastleIncome(castle);
                castle.lastIncome = now;
            }
        });

        // Process player's other locations
        player.ownedLocations.forEach(locationId => {
            const location = pointsOfInterest.find(p => p.id === locationId);
            if (!location) return;

            if (!location.lastIncome || (now - location.lastIncome >= CASTLE_INCOME_INTERVAL_MS)) {
                generateLocationIncome(location);
                location.lastIncome = now;
            }
        });

        // Process guild locations if player is in a guild
        if (player.guild && guilds[player.guild]) {
            guilds[player.guild].ownedLocations.forEach(locationId => {
                const location = pointsOfInterest.find(p => p.id === locationId);
                if (!location) return;

                if (!location.lastIncome || (now - location.lastIncome >= CASTLE_INCOME_INTERVAL_MS)) {
                    generateGuildIncome(location, guilds[player.guild]);
                    location.lastIncome = now;
                }
            });
        }
    }

    function generateCastleIncome(castle) {
        const territoryRadius = castle.territoryRadius || 20;
        const resourcePois = [];

        // Find all resource POIs within castle territory
        pointsOfInterest.forEach(poi => {
            if ((poi.type === 'forest' || poi.type === 'mountain' || poi.type === 'lake' || poi.type === 'hunting-ground' || poi.type === 'cave') && poi.id !== castle.id) {
                const distance = Math.sqrt(Math.pow(poi.x - castle.x, 2) + Math.pow(poi.y - castle.y, 2));
                if (distance <= territoryRadius) {
                    resourcePois.push(poi);
                }
            }
        });

        let goldGained = getRandomInt(50, 100);
        const itemsGained = {};

        resourcePois.forEach(poi => {
            const areaContent = AREA_CONTENT[poi.id];
            if (areaContent && areaContent.resources) {
                const resourceName = areaContent.resources[getRandomInt(0, areaContent.resources.length - 1)];
                const quantity = getRandomInt(1, 3);

                if (addItemToInventory(resourceName, quantity)) {
                    itemsGained[resourceName] = (itemsGained[resourceName] || 0) + quantity;
                }
            }
        });

        player.gold += goldGained;

        addBattleLog(`Renda do ${castle.name}: +${goldGained} ouro`, 'log-gold');
        for (const itemName in itemsGained) {
            addBattleLog(`Renda do ${castle.name}: +${itemsGained[itemName]} ${itemName}`, 'log-item');
        }
    }

    function generateLocationIncome(location) {
        let goldGained = getRandomInt(20, 40);
        const itemsGained = {};

        const areaContent = AREA_CONTENT[location.id];
        if (areaContent && areaContent.resources) {
            const resourceName = areaContent.resources[getRandomInt(0, areaContent.resources.length - 1)];
            const quantity = getRandomInt(2, 5);

            if (addItemToInventory(resourceName, quantity)) {
                itemsGained[resourceName] = quantity;
            }
        }

        player.gold += goldGained;

        addBattleLog(`Renda de ${location.name}: +${goldGained} ouro`, 'log-gold');
        for (const itemName in itemsGained) {
            addBattleLog(`Renda de ${location.name}: +${itemsGained[itemName]} ${itemName}`, 'log-item');
        }
    }

    function generateGuildIncome(location, guild) {
        // Guild income is distributed among all members
        let goldPerMember = Math.floor(getRandomInt(30, 60) / guild.members.length);
        const itemsGained = {};

        if (guild.members.includes(player.name)) {
            const areaContent = AREA_CONTENT[location.id];
            if (areaContent && areaContent.resources) {
                const resourceName = areaContent.resources[getRandomInt(0, areaContent.resources.length - 1)];
                const quantity = getRandomInt(1, 3);

                if (addItemToInventory(resourceName, quantity)) {
                    itemsGained[resourceName] = quantity;
                }
            }

            player.gold += goldPerMember;

            addBattleLog(`Renda da guilda de ${location.name}: +${goldPerMember} ouro`, 'log-gold');
            for (const itemName in itemsGained) {
                addBattleLog(`Renda da guilda de ${location.name}: +${itemsGained[itemName]} ${itemName}`, 'log-item');
            }
        }
    }

    // --- Enhanced Crafting System ---
    function updateCraftingDisplay(category = 'weapons') {
        recipeList.innerHTML = '';
        recipeDetails.classList.add('hidden');

        const recipes = CRAFTING_RECIPES[category] || {};
        const availableRecipes = {};

        // Filter recipes based on requirements
        for (const recipeId in recipes) {
            const recipe = recipes[recipeId];
            let canShow = true;

            // Check skill requirements
            if (recipe.skillsRequired) {
                for (const skillId in recipe.skillsRequired) {
                    const requiredLevel = recipe.skillsRequired[skillId];
                    const playerSkill = skillId === 'lumberjack' || skillId === 'mining' || skillId === 'fishing' ?
                        player.gatheringSkills[skillId] : player.weaponSkills[skillId];
                    const playerLevel = playerSkill ? playerSkill.level : 0;

                    if (playerLevel < requiredLevel) {
                        canShow = false;
                        break;
                    }
                }
            }

            if (canShow) {
                availableRecipes[recipeId] = recipe;
            }
        }

        for (const recipeId in availableRecipes) {
            const recipe = availableRecipes[recipeId];
            const li = document.createElement('li');
            li.textContent = recipe.name;
            li.addEventListener('click', () => showRecipeDetails(recipe));
            recipeList.appendChild(li);
        }

        if (Object.keys(availableRecipes).length === 0) {
            const li = document.createElement('li');
            li.textContent = 'Nenhuma receita disponível. Aumente suas perícias!';
            li.style.fontStyle = 'italic';
            recipeList.appendChild(li);
        }

        updateActiveCrafts();
    }

    function showRecipeDetails(recipe) {
        selectedRecipe = recipe;
        recipeName.textContent = recipe.name;
        recipeDescription.textContent = recipe.description;

        // Show materials
        requiredMaterials.innerHTML = '';
        let canCraft = true;

        for (const materialName in recipe.materials) {
            const required = recipe.materials[materialName];
            const playerItem = player.inventory.find(item => item.name === materialName);
            const playerQuantity = playerItem ? playerItem.quantity : 0;

            const li = document.createElement('li');
            li.innerHTML = `${materialName}: ${playerQuantity}/${required}`;

            if (playerQuantity >= required) {
                li.classList.add('material-available');
            } else {
                li.classList.add('material-insufficient');
                canCraft = false;
            }

            requiredMaterials.appendChild(li);
        }

        // Show skill requirements
        if (recipe.skillsRequired && Object.keys(recipe.skillsRequired).length > 0) {
            requiredSkills.innerHTML = '';
            recipeSkillRequirements.classList.remove('hidden');

            for (const skillId in recipe.skillsRequired) {
                const requiredLevel = recipe.skillsRequired[skillId];
                const playerSkill = skillId === 'lumberjack' || skillId === 'mining' || skillId === 'fishing' ?
                    player.gatheringSkills[skillId] : player.weaponSkills[skillId];
                const playerLevel = playerSkill ? playerSkill.level : 0;

                const skillConfig = WEAPON_SKILLS_CONFIG[skillId] || GATHERING_SKILLS_CONFIG[skillId];
                const skillName = skillConfig ? skillConfig.name : skillId;

                const li = document.createElement('li');
                li.innerHTML = `${skillName}: Nível ${requiredLevel} (Atual: ${playerLevel})`;

                if (playerLevel >= requiredLevel) {
                    li.classList.add('skill-available');
                } else {
                    li.classList.add('skill-insufficient');
                    canCraft = false;
                }

                requiredSkills.appendChild(li);
            }
        } else {
            recipeSkillRequirements.classList.add('hidden');
        }

        // Show crafting time
        let craftTime = recipe.craftTime;
        if (player.class === 'crafter') {
            craftTime = Math.floor(craftTime * (1 - PLAYER_CLASSES.crafter.bonuses.craftTimeReduction));
        }
        craftTime = Math.floor(craftTime * getEventModifier('craftTimeModifier', 1));

        craftingTimeEl.textContent = formatTime(craftTime);

        craftItemButton.disabled = !canCraft;
        recipeDetails.classList.remove('hidden');
    }

    function craftItem() {
        if (!selectedRecipe) return;

        // Check materials again
        for (const materialName in selectedRecipe.materials) {
            const required = selectedRecipe.materials[materialName];
            const playerItem = player.inventory.find(item => item.name === materialName);
            const playerQuantity = playerItem ? playerItem.quantity : 0;

            if (playerQuantity < required) {
                addBattleLog(`Materiais insuficientes para criar ${selectedRecipe.name}!`, 'log-error');
                return;
            }
        }

        // Check skill requirements
        if (selectedRecipe.skillsRequired) {
            for (const skillId in selectedRecipe.skillsRequired) {
                const requiredLevel = selectedRecipe.skillsRequired[skillId];
                const playerSkill = skillId === 'lumberjack' || skillId === 'mining' || skillId === 'fishing' ?
                    player.gatheringSkills[skillId] : player.weaponSkills[skillId];
                const playerLevel = playerSkill ? playerSkill.level : 0;

                if (playerLevel < requiredLevel) {
                    addBattleLog(`Perícia insuficiente para criar ${selectedRecipe.name}!`, 'log-error');
                    return;
                }
            }
        }

        // Consume materials
        for (const materialName in selectedRecipe.materials) {
            const required = selectedRecipe.materials[materialName];
            removeItemFromInventory(materialName, required);
        }

        // Calculate crafting time with bonuses
        let craftTime = selectedRecipe.craftTime;
        if (player.class === 'crafter') {
            craftTime = Math.floor(craftTime * (1 - PLAYER_CLASSES.crafter.bonuses.craftTimeReduction));
        }
        craftTime = Math.floor(craftTime * getEventModifier('craftTimeModifier', 1));

        // Add to crafting queue
        const craftId = Date.now().toString();
        const craftData = {
            id: craftId,
            recipe: selectedRecipe,
            startTime: Date.now(),
            endTime: Date.now() + craftTime,
            progress: 0
        };

        player.activeCrafts.push(craftData);
        addBattleLog(`Iniciando criação de ${selectedRecipe.name}. Tempo: ${formatTime(craftTime)}`, 'log-info');

        updateActiveCrafts();
        updateInventoryDisplay();
    }

    function updateActiveCrafts() {
        const now = Date.now();
        const completed = [];

        player.activeCrafts.forEach(craft => {
            craft.progress = Math.min(100, Math.floor(((now - craft.startTime) / (craft.endTime - craft.startTime)) * 100));

            if (now >= craft.endTime) {
                completed.push(craft);
            }
        });

        // Complete finished crafts
        completed.forEach(craft => {
            completeCraft(craft);
            player.activeCrafts = player.activeCrafts.filter(c => c.id !== craft.id);
        });

        // Update UI
        craftingQueue.innerHTML = '';

        if (player.activeCrafts.length > 0) {
            activeCrafts.classList.remove('hidden');

            player.activeCrafts.forEach(craft => {
                const li = document.createElement('li');
                const timeRemaining = Math.max(0, craft.endTime - now);

                li.innerHTML = `
                    <span>${craft.recipe.name}</span>
                    <div class="craft-progress">
                        <div class="craft-progress-bar" style="width: ${craft.progress}%"></div>
                    </div>
                    <span>${formatTime(timeRemaining)}</span>
                `;

                craftingQueue.appendChild(li);
            });
        } else {
            activeCrafts.classList.add('hidden');
        }
    }

    function completeCraft(craft) {
        const result = craft.recipe.result;

        if (typeof result === 'string') {
            // Simple result - item name from items database
            if (addItemToInventory(result, 1)) {
                addBattleLog(`${result} foi criado com sucesso!`, 'log-success');
            }
        } else {
            // Complex result - item definition
            if (!items[result.name]) {
                items[result.name] = result;
            }
            if (addItemToInventory(result.name, 1)) {
                addBattleLog(`${result.name} foi criado com sucesso!`, 'log-success');
            }
        }
    }

    // --- Area-specific Monster Generation ---
    function getAreaSpecificMonster(poiId, level) {
        const areaContent = AREA_CONTENT[poiId];
        if (!areaContent || !areaContent.monsters || areaContent.monsters.length === 0) {
            // Fall back to general monsters
            const availableMonsters = Object.values(monsters).filter(monster => {
                return (monster.exp / 10 >= level - 3 && monster.exp / 10 <= level + 3) ||
                    (monster.exp / 10 >= player.level - 3 && monster.exp / 10 <= player.level + 3);
            });
            return availableMonsters.length > 0 ? availableMonsters[getRandomInt(0, availableMonsters.length - 1)] : null;
        }

        const areaMonsters = areaContent.monsters.map(name => monsters[name]).filter(m => m);
        return areaMonsters.length > 0 ? areaMonsters[getRandomInt(0, areaMonsters.length - 1)] : null;
    }

    // --- Weight Management System ---
    function calculateWeightPenalties() {
        const weightRatio = player.currentWeight / player.maxWeight;
        const recommendedWeight = player.maxWeight * 0.9;
        const overweightRatio = player.currentWeight / recommendedWeight;

        let fatiguePenalty = 1.0;
        let attributePenalty = 1.0;

        if (player.currentWeight > recommendedWeight) {
            fatiguePenalty = 1.0 + Math.min(0.5, (overweightRatio - 1) * 0.5);
        }

        if (player.currentWeight >= player.maxWeight) {
            attributePenalty = 0.8;
        }

        return { fatiguePenalty, attributePenalty, weightRatio };
    }

    function updateWeightDisplay() {
        const weightRatio = player.currentWeight / player.maxWeight;
        const elements = [weightDisplayEl, inventoryWeightDisplayEl];

        elements.forEach(element => {
            if (element) {
                element.classList.remove('warning', 'danger');
                if (weightRatio >= 1.0) {
                    element.classList.add('danger');
                } else if (weightRatio >= 0.9) {
                    element.classList.add('warning');
                }
            }
        });
    }

    // --- Inventory Management ---
    function addItemToInventory(itemName, quantity = 1, isPassive = false) {
        const item = items[itemName];
        if (!item) {
            console.error('Item não encontrado:', itemName);
            return false;
        }

        const totalWeightToAdd = item.weight * quantity;
        const maxAllowedWeight = player.maxWeight * 1.1;

        if (player.currentWeight + totalWeightToAdd > maxAllowedWeight) {
            if (!isPassive) {
                addBattleLog(`Inventário completamente cheio! Não é possível adicionar ${item.name}.`, 'log-error');
            }
            return false;
        }

        const existingItem = player.inventory.find(i => i.name === itemName && i.type === item.type);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            player.inventory.push({ ...item, quantity: quantity });
        }
        player.currentWeight += totalWeightToAdd;

        if (player.currentWeight > player.maxWeight * 0.9 && player.currentWeight <= player.maxWeight) {
            if (!isPassive) {
                addBattleLog(`Atenção: Você está carregando muito peso! Isso pode afetar sua performance.`, 'log-warning');
            }
        } else if (player.currentWeight > player.maxWeight) {
            if (!isPassive) {
                addBattleLog(`Sobrepeso crítico! Todos os seus atributos estão reduzidos em 20%!`, 'log-error');
            }
        }

        updateInventoryDisplay();
        updatePlayerStatsDisplay();
        return true;
    }

    function removeItemFromInventory(itemName, quantity = 1) {
        const itemIndex = player.inventory.findIndex(i => i.name === itemName);
        if (itemIndex > -1) {
            const item = player.inventory[itemIndex];
            player.currentWeight -= (item.weight * quantity);
            item.quantity -= quantity;
            if (item.quantity <= 0) {
                player.inventory.splice(itemIndex, 1);
                if (player.equippedWeapon && player.equippedWeapon.name === itemName) player.equippedWeapon = null;
                if (player.equippedArmor && player.equippedArmor.name === itemName) player.equippedArmor = null;
            }
            player.currentWeight = Math.max(0, player.currentWeight);
            updateInventoryDisplay();
            updatePlayerStatsDisplay();
            return true;
        }
        return false;
    }

    function useItem(item, quantity) {
        if (!item || !quantity || quantity <= 0) return;

        if (item.type === 'consumable') {
            if (item.heal) {
                let healAmount = item.heal * quantity;
                if (player.class === 'mage') {
                    healAmount = Math.floor(healAmount * (1 + PLAYER_CLASSES.mage.bonuses.healBonus));
                }
                player.hp = Math.min(player.maxHp, player.hp + healAmount);
                addBattleLog(`Você usou ${quantity} ${item.name} e restaurou ${healAmount} HP.`, 'log-success');
            }
            if (item.reduceFatigue) {
                const reducedFatigue = item.reduceFatigue * quantity;
                player.fatigue = Math.max(0, player.fatigue - reducedFatigue);
                addBattleLog(`Você usou ${quantity} ${item.name} e reduziu sua fadiga em ${reducedFatigue}.`, 'log-success');
            }
            if (item.cureEffect) {
                if (item.cureEffect === 'bleed') {
                    const currentBleedEffect = player.activeEffects.find(e => e.type === 'bleed');
                    if (currentBleedEffect) {
                        if (currentBleedEffect.level <= (item.cureBleedLevel || 1)) {
                            removeStatusEffect(player, 'bleed');
                            addBattleLog(`Você usou ${item.name} e curou seu sangramento!`, 'log-success');
                        } else {
                            addBattleLog(`${item.name} não é forte o suficiente para curar seu sangramento nível ${currentBleedEffect.level}.`, 'log-warning');
                            return;
                        }
                    } else {
                        addBattleLog(`Você não está sangrando.`, 'log-info');
                        return;
                    }
                } else {
                    const hasEffect = player.activeEffects.find(e => e.type === item.cureEffect);
                    if (hasEffect) {
                        removeStatusEffect(player, item.cureEffect);
                        addBattleLog(`Você usou ${item.name} e curou ${item.cureEffect}!`, 'log-success');
                    } else {
                        addBattleLog(`Você não está sob o efeito de ${item.cureEffect}.`, 'log-info');
                        return;
                    }
                }
            }
            removeItemFromInventory(item.name, quantity);
            hideItemDetails();
        } else {
            addBattleLog(`Não é possível usar ${item.name}.`, 'log-error');
        }
        updatePlayerStatsDisplay();
    }

    function equipItem(item) {
        if (item.type === 'weapon') {
            if (player.equippedWeapon) {
                unequipItem(player.equippedWeapon);
            }
            player.equippedWeapon = item;
            addBattleLog(`Você equipou ${item.name}.`, 'log-info');
        } else if (item.type === 'armor') {
            if (player.equippedArmor) {
                unequipItem(player.equippedArmor);
            }
            player.equippedArmor = item;
            addBattleLog(`Você equipou ${item.name}.`, 'log-info');
        } else if (item.type === 'backpack') {
            addBattleLog(`${item.name} está no seu inventário fornecendo capacidade extra.`, 'log-info');
        } else {
            addBattleLog(`Você não pode equipar ${item.name}.`, 'log-error');
            return;
        }
        applyItemEffects(item);
        updatePlayerStatsDisplay();
        updateInventoryDisplay();
        hideItemDetails();
    }

    function unequipItem(item) {
        if (item.type === 'weapon' && player.equippedWeapon && player.equippedWeapon.name === item.name) {
            player.equippedWeapon = null;
            addBattleLog(`Você desequipou ${item.name}.`, 'log-info');
        } else if (item.type === 'armor' && player.equippedArmor && player.equippedArmor.name === item.name) {
            player.equippedArmor = null;
            addBattleLog(`Você desequipou ${item.name}.`, 'log-info');
        }
        removeItemEffects(item);
        updatePlayerStatsDisplay();
        updateInventoryDisplay();
    }

    function discardItem(item, quantity) {
        if (!item || !quantity || quantity <= 0) return;
        const totalWeightDiscarded = item.weight * quantity;

        removeItemFromInventory(item.name, quantity);
        addBattleLog(`Você descartou ${quantity} ${item.name}.`, 'log-warning');
        player.currentWeight -= totalWeightDiscarded;
        player.currentWeight = Math.max(0, player.currentWeight);
        updateInventoryDisplay();
        updatePlayerStatsDisplay();
        hideItemDetails();
    }

    function applyItemEffects(item) {
        if (item.passiveEffect) {
            const effect = item.passiveEffect;
            if (effect.type === 'stat_boost') {
                player[effect.stat] += effect.value;
            } else if (effect.type === 'stat_boost_multi') {
                effect.effects.forEach(e => {
                    player[e.stat] += e.value;
                });
            } else if (effect.type === 'weight_boost') {
                player.maxWeight += effect.value;
            }
        }
        updateCalculatedStats();
    }

    function removeItemEffects(item) {
        if (item.passiveEffect) {
            const effect = item.passiveEffect;
            if (effect.type === 'stat_boost') {
                player[effect.stat] -= effect.value;
            } else if (effect.type === 'stat_boost_multi') {
                effect.effects.forEach(e => {
                    player[e.stat] -= e.value;
                });
            } else if (effect.type === 'weight_boost') {
                player.maxWeight -= effect.value;
            }
        }
        updateCalculatedStats();
    }

    function updateCalculatedStats() {
        // Calculate base max weight including backpack bonuses
        let baseMaxWeight = 50.0;
        player.inventory.forEach(item => {
            if (item.type === 'backpack' && item.passiveEffect && item.passiveEffect.type === 'weight_boost') {
                baseMaxWeight += item.passiveEffect.value;
            }
        });
        player.maxWeight = baseMaxWeight;

        const { attributePenalty } = calculateWeightPenalties();
        const effectiveStrength = Math.floor(player.strength * attributePenalty);
        const effectiveResistance = Math.floor(player.resistance * attributePenalty);

        let baseMinDamage = 5 + (effectiveStrength * 2);
        let baseMaxDamage = 10 + (effectiveStrength * 3);

        if (player.equippedWeapon) {
            baseMinDamage += player.equippedWeapon.minAttackBonus || 0;
            baseMaxDamage += player.equippedWeapon.maxAttackBonus || 0;
        }
        player.minDamage = baseMinDamage;
        player.maxDamage = baseMaxDamage;

        let baseDefense = (effectiveResistance * 1);
        if (player.equippedArmor) {
            baseDefense += player.equippedArmor.defenseBonus || 0;
        }
        player.defense = baseDefense;

        player.maxHp = 75 + (player.resistance * 10) + ((player.level - 1) * 10);
        player.hp = Math.min(player.hp, player.maxHp);
        updatePlayerStatsDisplay();
    }

    // --- UI Updates ---
    function updatePlayerStatsDisplay() {
        playerHpEl.textContent = `${player.hp}/${player.maxHp}`;
        playerNameDisplay.textContent = player.name;
        playerClassDisplay.textContent = player.class ? PLAYER_CLASSES[player.class].name : 'Nenhuma';
        playerLevelEl.textContent = player.level;
        playerExpEl.textContent = player.exp;
        playerExpNextLevelEl.textContent = player.expToNextLevel;
        playerSkillPointsEl.textContent = player.skillPoints;

        playerStatsHpEl.textContent = `${player.hp}/${player.maxHp}`;
        playerStatsDamageEl.textContent = `${player.minDamage}-${player.maxDamage}`;
        playerStatsDefenseEl.textContent = player.defense;
        playerStatsGoldEl.textContent = player.gold;
        playerCurrentWeightEl.textContent = player.currentWeight.toFixed(2);
        playerMaxWeightEl.textContent = player.maxWeight.toFixed(2);
        playerFatigueEl.textContent = player.fatigue;

        const { attributePenalty } = calculateWeightPenalties();

        attrStrengthEl.textContent = player.strength + (attributePenalty < 1 ? ` (${Math.floor(player.strength * attributePenalty)})` : '');
        attrResistanceEl.textContent = player.resistance + (attributePenalty < 1 ? ` (${Math.floor(player.resistance * attributePenalty)})` : '');
        attrAgilityEl.textContent = player.agility + (attributePenalty < 1 ? ` (${Math.floor(player.agility * attributePenalty)})` : '');
        attrIntelligenceEl.textContent = player.intelligence + (attributePenalty < 1 ? ` (${Math.floor(player.intelligence * attributePenalty)})` : '');

        document.getElementById('player-stats-gold-shop').textContent = player.gold;
        document.getElementById('player-fatigue-shop').textContent = player.fatigue;

        equippedWeaponDisplay.textContent = player.equippedWeapon ? player.equippedWeapon.name : 'Nenhuma';
        equippedArmorDisplay.textContent = player.equippedArmor ? player.equippedArmor.name : 'Nenhuma';

        // Show class selection if available
        if (player.level >= 5 && !player.class) {
            classSelectionArea.classList.remove('hidden');
        } else {
            classSelectionArea.classList.add('hidden');
        }

        updateWeightDisplay();
        updateSkillsDisplay();

        addAttributeButtons.forEach(button => {
            button.disabled = player.skillPoints === 0;
        });
        restButton.disabled = player.gold < player.restCost || player.fatigue === 0;
    }

    function updateSkillsDisplay() {
        // Weapon Skills
        weaponSkillsSection.innerHTML = '';
        for (const skillId in player.weaponSkills) {
            const skill = player.weaponSkills[skillId];
            const skillConfig = WEAPON_SKILLS_CONFIG[skillId];

            if (skillConfig) {
                const skillRow = document.createElement('div');
                skillRow.className = 'skill-row';
                skillRow.addEventListener('mouseenter', (e) => showSkillTooltip(e, skillId, 'weapon'));
                skillRow.addEventListener('mouseleave', hideSkillTooltip);

                skillRow.innerHTML = `
                    <div class="skill-info">
                        <div class="skill-name">${skillConfig.name}</div>
                        <div class="skill-exp">${skill.exp}/${skill.expToNext} EXP</div>
                    </div>
                    <div class="skill-level">Nv. ${skill.level}</div>
                `;

                weaponSkillsSection.appendChild(skillRow);
            }
        }

        if (Object.keys(player.weaponSkills).length === 0) {
            weaponSkillsSection.innerHTML = '<p>Nenhuma perícia de arma aprendida ainda.</p>';
        }

        // Gathering Skills
        gatheringSkillsSection.innerHTML = '';
        for (const skillId in player.gatheringSkills) {
            const skill = player.gatheringSkills[skillId];
            const skillConfig = GATHERING_SKILLS_CONFIG[skillId];

            if (skillConfig) {
                const skillRow = document.createElement('div');
                skillRow.className = 'skill-row';
                skillRow.addEventListener('mouseenter', (e) => showSkillTooltip(e, skillId, 'gathering'));
                skillRow.addEventListener('mouseleave', hideSkillTooltip);

                skillRow.innerHTML = `
                    <div class="skill-info">
                        <div class="skill-name">${skillConfig.name}</div>
                        <div class="skill-exp">${skill.exp}/${skill.expToNext} EXP</div>
                    </div>
                    <div class="skill-level">Nv. ${skill.level}</div>
                `;

                gatheringSkillsSection.appendChild(skillRow);
            }
        }

        if (Object.keys(player.gatheringSkills).length === 0) {
            gatheringSkillsSection.innerHTML = '<p>Nenhuma perícia de coleta aprendida ainda.</p>';
        }
    }

    function showSkillTooltip(event, skillId, skillType) {
        hideSkillTooltip();

        const config = skillType === 'weapon' ? WEAPON_SKILLS_CONFIG[skillId] : GATHERING_SKILLS_CONFIG[skillId];
        const skill = skillType === 'weapon' ? player.weaponSkills[skillId] : player.gatheringSkills[skillId];

        if (!config || !skill) return;

        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';

        let tooltipContent = `<h4>${config.name} (Nível ${skill.level})</h4>`;
        tooltipContent += `<p>${config.description}</p>`;

        if (config.bonuses) {
            tooltipContent += '<ul>';
            for (let level = 1; level <= skill.level; level++) {
                if (config.bonuses[level]) {
                    tooltipContent += `<li>Nv. ${level}: ${config.bonuses[level].description}</li>`;
                }
            }

            // Show next bonus
            const nextBonus = config.bonuses[skill.level + 1];
            if (nextBonus) {
                tooltipContent += `<li style="color: #888;">Nv. ${skill.level + 1}: ${nextBonus.description}</li>`;
            }
            tooltipContent += '</ul>';
        }

        tooltip.innerHTML = tooltipContent;

        // Position tooltip
        const rect = event.target.getBoundingClientRect();
        tooltip.style.left = (rect.right + 10) + 'px';
        tooltip.style.top = rect.top + 'px';

        document.body.appendChild(tooltip);
        currentSkillTooltip = tooltip;
    }

    function hideSkillTooltip() {
        if (currentSkillTooltip) {
            document.body.removeChild(currentSkillTooltip);
            currentSkillTooltip = null;
        }
    }

    function updateInventoryDisplay() {
        inventoryListEl.innerHTML = '';
        player.inventory.forEach(item => {
            const li = document.createElement('li');
            const rarityInfo = ITEM_RARITIES[item.rarity] || ITEM_RARITIES['common'];
            li.innerHTML = `<span class="${rarityInfo.color}">${item.name}</span> (x${item.quantity})`;

            if (player.equippedWeapon && player.equippedWeapon.name === item.name) {
                li.innerHTML += ' <span style="color: var(--success-green);">(Equipado)</span>';
                li.classList.add('equipped-item');
            }
            if (player.equippedArmor && player.equippedArmor.name === item.name) {
                li.innerHTML += ' <span style="color: var(--success-green);">(Equipado)</span>';
                li.classList.add('equipped-item');
            }
            li.dataset.itemName = item.name;
            li.addEventListener('click', () => showItemDetails(item));
            inventoryListEl.appendChild(li);
        });

        inventoryCurrentWeightEl.textContent = player.currentWeight.toFixed(2);
        inventoryMaxWeightEl.textContent = player.maxWeight.toFixed(2);
    }

    function showItemDetails(item) {
        player.selectedInventoryItem = item;
        detailItemNameEl.textContent = item.name;

        const rarityInfo = ITEM_RARITIES[item.rarity] || ITEM_RARITIES['common'];
        detailItemRarityEl.textContent = rarityInfo.name;
        detailItemRarityEl.className = rarityInfo.color;

        detailItemWeightEl.textContent = item.weight.toFixed(2);
        detailItemDescriptionEl.textContent = item.description;
        detailItemQuantityEl.textContent = item.quantity;

        useItemButton.classList.add('hidden');
        equipItemButton.classList.add('hidden');
        actionQuantityInput.value = 1;
        actionQuantityInput.max = item.quantity;
        actionQuantityInput.min = 1;

        detailItemEffectsEl.innerHTML = '';
        detailItemEffectsEl.classList.add('hidden');

        if (item.type === 'consumable') {
            useItemButton.classList.remove('hidden');
            if (item.passiveEffect) {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Efeito:** ${item.passiveEffect.name}</div>`;
                detailItemEffectsEl.innerHTML += `<div>${item.passiveEffect.description}</div>`;
            } else if (item.heal) {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Cura:** ${item.heal} HP</div>`;
            } else if (item.reduceFatigue) {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Reduz Fadiga:** ${item.reduceFatigue}</div>`;
            } else if (item.cureEffect) {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Cura Efeito:** ${item.cureEffect}</div>`;
                if (item.cureBleedLevel) {
                    detailItemEffectsEl.innerHTML += `<div>**Nível Sangramento:** Até ${item.cureBleedLevel}</div>`;
                }
            }
        } else if (item.type === 'weapon' || item.type === 'armor' || item.type === 'backpack') {
            equipItemButton.classList.remove('hidden');
            if (item.passiveEffect) {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Efeito Passivo:** ${item.passiveEffect.name}</div>`;
                detailItemEffectsEl.innerHTML += `<div>${item.passiveEffect.description}</div>`;
            }
            if (item.statusEffectChance) {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Efeito de Status:** ${STATUS_EFFECTS_CONFIG[item.statusEffectChance.type]?.name} (${Math.floor(item.statusEffectChance.chance * 100)}% chance)</div>`;
            }
            if (item.type === 'weapon') {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Dano:** ${item.minAttackBonus || 0}-${item.maxAttackBonus || 0}</div>`;
                if (item.requiresAmmo) {
                    detailItemEffectsEl.innerHTML += `<div>**Requer:** ${item.requiresAmmo}</div>`;
                }
                if (item.weaponType) {
                    const skillConfig = WEAPON_SKILLS_CONFIG[item.weaponType];
                    if (skillConfig) {
                        detailItemEffectsEl.innerHTML += `<div>**Perícia:** ${skillConfig.name}</div>`;
                    }
                }
            } else if (item.type === 'armor') {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Defesa:** ${item.defenseBonus || 0}</div>`;
            } else if (item.type === 'backpack') {
                detailItemEffectsEl.classList.remove('hidden');
                detailItemEffectsEl.innerHTML += `<div>**Capacidade Extra:** +${item.weightBonus}kg</div>`;
            }
        } else if (item.type === 'tool') {
            detailItemEffectsEl.classList.remove('hidden');
            detailItemEffectsEl.innerHTML += `<div>**Tipo:** Ferramenta</div>`;
        }

        itemDetailsEl.classList.remove('hidden');
    }

    function hideItemDetails() {
        itemDetailsEl.classList.add('hidden');
        player.selectedInventoryItem = null;
    }

    function updateShopDisplay() {
        shopItemsListEl.innerHTML = '';
        const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
        if (currentPoi && currentPoi.stock) {
            restockShop(currentPoi);

            for (const itemName in currentPoi.stock) {
                const quantityInStock = currentPoi.stock[itemName];
                const item = items[itemName];

                if (item && quantityInStock > 0) {
                    const rarityInfo = ITEM_RARITIES[item.rarity] || ITEM_RARITIES['common'];
                    let price = item.buyPrice;
                    const originalPrice = price;

                    // Apply global event modifier
                    price = Math.floor(price * getEventModifier('shopPriceModifier', 1));

                    const li = document.createElement('li');
                    let priceDisplay = `${price} Ouro`;

                    // Show price modifiers
                    if (price < originalPrice) {
                        const discount = Math.floor(((originalPrice - price) / originalPrice) * 100);
                        priceDisplay += ` <span style="color: green;">(-${discount}%)</span>`;
                    } else if (price > originalPrice) {
                        const increase = Math.floor(((price - originalPrice) / originalPrice) * 100);
                        priceDisplay += ` <span style="color: red;">(+${increase}%)</span>`;
                    }

                    li.innerHTML = `
                        <span><span class="${rarityInfo.color}">${item.name}</span> (x${quantityInStock})</span>
                        <span>${priceDisplay}</span>
                        <button class="buy-item-list-button" data-item-name="${item.name}">Comprar</button>
                    `;
                    li.querySelector('.buy-item-list-button').addEventListener('click', (e) => {
                        const purchasedItemName = e.target.dataset.itemName;
                        buyItem(purchasedItemName, 1);
                    });
                    shopItemsListEl.appendChild(li);
                }
            }
        }
    }

    function buyItem(itemName, quantity) {
        const item = items[itemName];
        const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);

        if (!item || !item.buyPrice || item.buyPrice === 0) {
            addBattleLog(`${itemName} não está à venda neste local.`, 'log-error');
            return false;
        }
        if (!currentPoi || !currentPoi.stock || currentPoi.stock[itemName] === undefined || currentPoi.stock[itemName] < quantity) {
            addBattleLog(`${itemName} está fora de estoque.`, 'log-error');
            return false;
        }

        let price = item.buyPrice * quantity;
        price = Math.floor(price * getEventModifier('shopPriceModifier', 1));

        if (player.gold < price) {
            addBattleLog(`Você não tem ouro suficiente para comprar ${itemName}.`, 'log-error');
            return false;
        }

        const totalWeightToAdd = item.weight * quantity;
        const maxAllowedWeight = player.maxWeight * 1.1;
        if (player.currentWeight + totalWeightToAdd > maxAllowedWeight) {
            addBattleLog(`Inventário cheio! Não é possível comprar ${itemName}.`, 'log-error');
            return false;
        }

        player.gold -= price;
        addItemToInventory(itemName, quantity);
        currentPoi.stock[itemName] -= quantity;
        addBattleLog(`Você comprou ${quantity} ${itemName} por ${price} ouro.`, 'log-success');
        updatePlayerStatsDisplay();
        updateInventoryDisplay();
        updateShopDisplay();
        return true;
    }

    function restockShop(poi) {
        const now = Date.now();
        if ((poi.type.startsWith('shop') || poi.type === 'settlement') && (!poi.lastRestockTime || (now - poi.lastRestockTime >= RESTOCK_INTERVAL_MS))) {
            poi.stock = { ...poi.initialStock };
            poi.lastRestockTime = now;
            addBattleLog(`${poi.name} reabasteceu seu estoque!`, 'log-info');
        }
    }

    // --- Location Information System ---
    function handlePoiClick(poiId) {
        if (player.isTraveling) {
            addBattleLog('Você já está viajando!', 'log-warning');
            return;
        }
        if (player.isPassiveFarming) {
            addBattleLog('Você está farmando passivamente e não pode se mover!', 'log-warning');
            return;
        }
        if (player.isConqueringCastle) {
            addBattleLog('Você está conquistando um castelo e não pode sair!', 'log-warning');
            return;
        }

        selectedLocationId = poiId;
        const clickedPoi = pointsOfInterest.find(p => p.id === poiId);
        showLocationModal(clickedPoi);
    }

    function showLocationModal(poi) {
        locationNameEl.textContent = poi.name;
        locationDescriptionEl.textContent = poi.description;
        locationResourcesEl.textContent = `Recursos disponíveis: ${poi.resources || 'Informações limitadas'}`;

        // Hide all action buttons initially
        travelToLocationButton.classList.add('hidden');
        enterLocationButton.classList.add('hidden');
        activeHuntButton.classList.add('hidden');
        passiveHuntButton.classList.add('hidden');
        activeGatherButton.classList.add('hidden');
        castleInfoButton.classList.add('hidden');

        // Show castle territory info
        if (poi.owner) {
            castleTerritoryInfo.classList.remove('hidden');
            territoryOwnerEl.textContent = poi.owner;
            const resourcesInTerritory = [];
            const territoryRadius = poi.territoryRadius || 20;

            pointsOfInterest.forEach(otherPoi => {
                if (otherPoi.id !== poi.id && (otherPoi.type === 'forest' || otherPoi.type === 'mountain' || otherPoi.type === 'lake' || otherPoi.type === 'hunting-ground' || otherPoi.type === 'cave')) {
                    const distance = Math.sqrt(Math.pow(otherPoi.x - poi.x, 2) + Math.pow(otherPoi.y - poi.y, 2));
                    if (distance <= territoryRadius) {
                        resourcesInTerritory.push(otherPoi.name);
                    }
                }
            });

            territoryResourcesEl.textContent = resourcesInTerritory.length > 0 ? resourcesInTerritory.join(', ') : 'Nenhum';
        } else {
            castleTerritoryInfo.classList.add('hidden');
        }

        // Show/hide buttons based on current location and POI type
        if (poi.id === player.currentLocationId) {
            // Already at this location
            enterLocationButton.classList.remove('hidden');

            // Show additional options for explored hunting grounds
            if (poi.explored && (poi.type === 'hunting-ground' || poi.type === 'cave')) {
                activeHuntButton.classList.remove('hidden');
                passiveHuntButton.classList.remove('hidden');
            }

            // Show gathering option for resource areas
            if (poi.type === 'forest' || poi.type === 'mountain' || poi.type === 'lake') {
                activeGatherButton.classList.remove('hidden');
            }

            // Show castle options
            if (poi.type === 'castle' || poi.type === 'capital') {
                castleInfoButton.classList.remove('hidden');
            }
        } else {
            // Need to travel here
            travelToLocationButton.classList.remove('hidden');
        }

        // Show experience-based information if player has been here
        const locationExp = player.locationExperience[poi.id];
        if (locationExp && locationExp.battles > 0) {
            locationExperienceInfoEl.classList.remove('hidden');

            // Monster information
            if (locationExp.monstersKilled.length > 0) {
                monsterInfoSectionEl.innerHTML = `<h4>Monstros Encontrados:</h4><p>${locationExp.monstersKilled.join(', ')}</p><p>Batalhas realizadas: ${locationExp.battles}</p>`;
            } else {
                monsterInfoSectionEl.innerHTML = '';
            }

            // Loot information  
            if (locationExp.lootFound.length > 0) {
                lootInfoSectionEl.innerHTML = `<h4>Itens Encontrados:</h4><p>${locationExp.lootFound.join(', ')}</p>`;
            } else {
                lootInfoSectionEl.innerHTML = '';
            }

            // Resource information for gathering areas
            if (poi.resource) {
                resourceInfoSectionEl.innerHTML = `<h4>Recursos de Coleta:</h4><p>${poi.resource.type} - Abundância: ${poi.resource.abundance}</p>`;
            } else {
                resourceInfoSectionEl.innerHTML = '';
            }
        } else {
            locationExperienceInfoEl.classList.add('hidden');
        }

        showModal(locationModal);
    }

    // --- Map and Travel System ---
    function initializePoiMarkers() {
        pointsOfInterest.forEach(poi => {
            const marker = document.createElement('div');
            marker.classList.add('poi-marker', poi.type);
            marker.id = `poi-${poi.id}`;
            marker.dataset.poiId = poi.id;
            marker.dataset.levelRange = JSON.stringify(poi.levelRange);
            marker.dataset.explored = poi.explored;

            marker.style.left = `${poi.x}%`;
            marker.style.top = `${poi.y}%`;

            marker.addEventListener('click', () => handlePoiClick(poi.id));
            mapInnerContent.appendChild(marker);
        });
        updatePoiMarkers();
    }

    function updatePoiMarkers() {
        document.querySelectorAll('.poi-marker').forEach(markerEl => {
            const poiId = markerEl.dataset.poiId;
            const poi = pointsOfInterest.find(p => p.id === poiId);

            markerEl.classList.remove('current-location', 'traveling-target', 'skull-icon', 'conquered',
                'difficulty-easy', 'difficulty-normal', 'difficulty-hard', 'difficulty-very-hard', 'difficulty-extreme');

            markerEl.classList.add(poi.type);

            if (markerEl.dataset.poiId === player.currentLocationId) {
                markerEl.classList.add('current-location');
            }
            if (player.isTraveling && player.travelArrow.endPoi && markerEl.dataset.poiId === player.travelArrow.endPoi.id) {
                markerEl.classList.add('traveling-target');
            }

            // Castle and capital markers
            if (poi.type === 'castle' || poi.type === 'capital') {
                if (poi.owner) {
                    markerEl.classList.add('conquered');
                    markerEl.innerHTML = `<span>${poi.owner}</span>`;
                } else {
                    markerEl.innerHTML = `<span>${poi.name}</span>`;
                }
            }
            // Combat area markers
            else if (poi && (poi.type === 'hunting-ground' || poi.type === 'cave')) {
                if (poi.explored) {
                    const minLevel = poi.levelRange[0];
                    const avgPoiLevel = (minLevel + poi.levelRange[1]) / 2;
                    const levelDifference = avgPoiLevel - player.level;

                    let difficultyClass = '';
                    if (levelDifference <= -2) {
                        difficultyClass = 'difficulty-easy';
                    } else if (levelDifference <= 0) {
                        difficultyClass = 'difficulty-normal';
                    } else if (levelDifference <= 3) {
                        difficultyClass = 'difficulty-hard';
                    } else if (levelDifference <= 6) {
                        difficultyClass = 'difficulty-very-hard';
                    } else {
                        difficultyClass = 'difficulty-extreme';
                    }
                    markerEl.classList.add(difficultyClass);
                    markerEl.innerHTML = `<span>Lvl ${poi.levelRange[0]}-${poi.levelRange[1]}</span>`;
                } else {
                    markerEl.classList.add('skull-icon');
                    markerEl.innerHTML = `<span></span>`;
                }
            }
            // Resource area markers
            else if (poi && (poi.type === 'forest' || poi.type === 'mountain' || poi.type === 'lake')) {
                if (poi.explored) {
                    let resourceInfo = '';
                    if (poi.resource) {
                        resourceInfo = `<br>${poi.resource.type} (${poi.resource.abundance})`;
                    }
                    markerEl.innerHTML = `<span>${poi.name}${resourceInfo}</span>`;
                } else {
                    markerEl.innerHTML = `<span></span>`;
                }
            }
            // Other markers
            else {
                markerEl.innerHTML = `<span>${poi.name}</span>`;
            }
        });

        // Draw territory circles
        drawTerritoryCircles();
    }

    function drawTerritoryCircles() {
        // Clear existing territory overlays
        document.querySelectorAll('.territory-circle').forEach(circle => circle.remove());

        pointsOfInterest.forEach(poi => {
            if ((poi.type === 'castle' || poi.type === 'capital') && poi.owner) {
                const circle = document.createElement('div');
                circle.className = 'territory-circle';
                circle.classList.add(poi.type === 'capital' ? 'capital-territory' : 'castle-territory');

                const radius = (poi.territoryRadius || 20) * 2; // Convert to percentage-based radius
                circle.style.width = `${radius}%`;
                circle.style.height = `${radius}%`;
                circle.style.left = `${poi.x - radius/2}%`;
                circle.style.top = `${poi.y - radius/2}%`;
                circle.style.position = 'absolute';
                circle.style.border = poi.type === 'capital' ? '2px solid rgba(255, 0, 0, 0.3)' : '2px solid rgba(0, 123, 255, 0.3)';
                circle.style.borderRadius = '50%';
                circle.style.pointerEvents = 'none';
                circle.style.zIndex = '1';

                mapInnerContent.appendChild(circle);
            }
        });
    }

    function startTravel(startPoi, endPoi) {
        player.isTraveling = true;
        player.travelArrow.startPoi = startPoi;
        player.travelArrow.endPoi = endPoi;

        const dx = endPoi.x - startPoi.x;
        const dy = endPoi.y - startPoi.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        player.travelArrow.duration = Math.max(1500, distance * 100);
        player.travelArrow.startTime = performance.now();
        player.travelArrow.progress = 0;

        addBattleLog(`Iniciando viagem de ${startPoi.name} para ${endPoi.name}...`, 'log-info');
        updatePoiMarkers();
        travelAnimationFrameId = requestAnimationFrame(travelAnimationLoop);
    }

    function travelAnimationLoop(currentTime) {
        if (!player.isTraveling) {
            cancelAnimationFrame(travelAnimationFrameId);
            ctx.clearRect(0, 0, gameMapCanvas.width, gameMapCanvas.height);
            return;
        }

        const elapsedTime = currentTime - player.travelArrow.startTime;
        player.travelArrow.progress = Math.min(1, elapsedTime / player.travelArrow.duration);

        drawTravelArrow();

        if (player.travelArrow.progress < 1) {
            travelAnimationFrameId = requestAnimationFrame(travelAnimationLoop);
        } else {
            player.isTraveling = false;
            cancelAnimationFrame(travelAnimationFrameId);
            ctx.clearRect(0, 0, gameMapCanvas.width, gameMapCanvas.height);

            const arrivedPoi = player.travelArrow.endPoi;
            addBattleLog(`Você chegou a ${arrivedPoi.name}.`, 'log-success');

            player.currentLocationId = arrivedPoi.id;

            const { fatiguePenalty } = calculateWeightPenalties();
            let effectiveFatiguePerTravel = player.fatiguePerTravel;

            // Apply heat event modifier
            if (activeEvent && activeEvent.effects.fatigueModifier) {
                effectiveFatiguePerTravel = Math.floor(effectiveFatiguePerTravel * activeEvent.effects.fatigueModifier);
            }

            const fatigueGained = Math.floor(effectiveFatiguePerTravel * fatiguePenalty);
            player.fatigue += fatigueGained;

            if (fatiguePenalty > 1) {
                addBattleLog(`O peso extra aumentou sua fadiga de viagem! (+${fatigueGained - effectiveFatiguePerTravel} fadiga)`, 'log-warning');
            }

            updatePoiMarkers();
            updatePlayerStatsDisplay();

            player.travelArrow.startPoi = null;
            player.travelArrow.endPoi = null;
            player.travelArrow.progress = 0;
            player.travelArrow.duration = 0;
            player.travelArrow.startTime = 0;

            // Handle arrival at different POI types
            if ((arrivedPoi.type === 'hunting-ground' || arrivedPoi.type === 'cave') && (arrivedPoi.isCombatArea !== false)) {
                const minLevel = arrivedPoi.levelRange[0];
                const maxLevel = arrivedPoi.levelRange[1];
                const monsterLevel = getRandomInt(minLevel, maxLevel);
                currentPoiLevel = monsterLevel;
                spawnRandomMonster(monsterLevel, arrivedPoi.id);
            } else if (arrivedPoi.type === 'forest' || arrivedPoi.type === 'mountain' || arrivedPoi.type === 'lake') {
                arrivedPoi.explored = true;
                updatePoiMarkers();
                openPassiveFarmModal(arrivedPoi);
            } else if (arrivedPoi.type.startsWith('shop') || arrivedPoi.type === 'settlement') {
                openShopModal();
            } else if (arrivedPoi.type === 'castle' || arrivedPoi.type === 'capital') {
                showSection('castle-conquest-area');
                castleNameEl.textContent = arrivedPoi.name;
                castleOwnerEl.textContent = arrivedPoi.owner || 'Nenhum';
                conquestProgressEl.textContent = '0';
                conquestTimeEl.textContent = '--';
                castleLogEl.innerHTML = '';

                if (arrivedPoi.owner === player.name || (player.guild && arrivedPoi.owner === guilds[player.guild].name)) {
                    addCastleLog(`Bem-vindo ao seu ${arrivedPoi.type === 'capital' ? 'capital' : 'castelo'}, ${arrivedPoi.name}!`, 'log-success');
                    startConquestButton.classList.add('hidden');
                } else if (arrivedPoi.owner) {
                    addCastleLog(`Este ${arrivedPoi.type === 'capital' ? 'capital' : 'castelo'} pertence a ${arrivedPoi.owner}.`, 'log-info');
                    const conquestTime = arrivedPoi.type === 'capital' ? '12 horas' : '1 hora';
                    addCastleLog(`Você pode tentar conquistá-lo, mas isso levará ${conquestTime}.`, 'log-warning');
                    startConquestButton.classList.remove('hidden');
                } else {
                    addCastleLog(`Este ${arrivedPoi.type === 'capital' ? 'capital' : 'castelo'} está abandonado. Você pode conquistá-lo!`, 'log-info');
                    startConquestButton.classList.remove('hidden');
                }

                stopConquestButton.classList.add('hidden');
            }
        }
    }

    function drawTravelArrow() {
        ctx.clearRect(0, 0, gameMapCanvas.width, gameMapCanvas.height);

        if (player.isTraveling && player.travelArrow.startPoi && player.travelArrow.endPoi) {
            const startPoi = player.travelArrow.startPoi;
            const endPoi = player.travelArrow.endPoi;

            const startMarker = document.getElementById(`poi-${startPoi.id}`);
            const endMarker = document.getElementById(`poi-${endPoi.id}`);

            if (!startMarker || !endMarker) return;

            const mapRect = mapArea.getBoundingClientRect();

            const startRect = startMarker.getBoundingClientRect();
            const endRect = endMarker.getBoundingClientRect();

            const startX = (startRect.left + startRect.width / 2) - mapRect.left;
            const startY = (startRect.top + startRect.height / 2) - mapRect.top;
            const endX = (endRect.left + endRect.width / 2) - mapRect.left;
            const endY = (endRect.top + endRect.height / 2) - mapRect.top;

            const currentX = startX + (endX - startX) * player.travelArrow.progress;
            const currentY = startY + (endY - startY) * player.travelArrow.progress;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(currentX, currentY);
            ctx.strokeStyle = 'rgba(255, 193, 7, 0.8)';
            ctx.lineWidth = ARROW_WIDTH;
            ctx.lineCap = 'round';
            ctx.stroke();

            const angle = Math.atan2(endY - startY, endX - startX);
            ctx.fillStyle = 'rgba(255, 193, 7, 0.9)';
            ctx.save();
            ctx.translate(currentX, currentY);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(-ARROW_HEAD_SIZE, -ARROW_HEAD_SIZE / 2);
            ctx.lineTo(0, 0);
            ctx.lineTo(-ARROW_HEAD_SIZE, ARROW_HEAD_SIZE / 2);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    function resizeCanvas() {
        gameMapCanvas.width = mapArea.clientWidth;
        gameMapCanvas.height = mapArea.clientHeight;
        applyMapTransform();
        drawTravelArrow();
    }

    function applyMapTransform() {
        const viewportWidth = mapArea.clientWidth;
        const viewportHeight = mapArea.clientHeight;

        const intrinsicContentWidth = viewportWidth * 5;
        const intrinsicContentHeight = viewportHeight * 5;

        mapInnerContent.style.width = `${intrinsicContentWidth}px`;
        mapInnerContent.style.height = `${intrinsicContentHeight}px`;

        const currentContentWidth = intrinsicContentWidth * scale;
        const currentContentHeight = intrinsicContentHeight * scale;

        const maxOffsetX = 0;
        const minOffsetX = viewportWidth - currentContentWidth;
        const maxOffsetY = 0;
        const minOffsetY = viewportHeight - currentContentHeight;

        offsetX = Math.max(minOffsetX, Math.min(maxOffsetX, offsetX));
        offsetY = Math.max(minOffsetY, Math.min(maxOffsetY, offsetY));

        mapInnerContent.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    }

    // Map interaction events
    mapArea.addEventListener('mousedown', (e) => {
        if (e.target.closest('.poi-marker') || e.target.closest('.modal')) {
            return;
        }
        isDragging = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        mapArea.style.cursor = 'grabbing';
    });

    mapArea.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;

        offsetX += dx;
        offsetY += dy;

        applyMapTransform();
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        drawTravelArrow();
    });

    mapArea.addEventListener('mouseup', () => {
        isDragging = false;
        mapArea.style.cursor = 'grab';
    });

    mapArea.addEventListener('mouseleave', () => {
        isDragging = false;
        mapArea.style.cursor = 'grab';
    });

    mapArea.addEventListener('wheel', (e) => {
        e.preventDefault();

        const zoomFactor = 0.1;
        const oldScale = scale;
        if (e.deltaY < 0) {
            scale *= (1 + zoomFactor);
        } else {
            scale *= (1 - zoomFactor);
        }

        scale = Math.max(minScale, Math.min(maxScale, scale));

        const mouseX = e.clientX - mapArea.getBoundingClientRect().left;
        const mouseY = e.clientY - mapArea.getBoundingClientRect().top;

        offsetX = mouseX - ((mouseX - offsetX) * (scale / oldScale));
        offsetY = mouseY - ((mouseY - offsetY) * (scale / oldScale));

        applyMapTransform();
        drawTravelArrow();
    });

    function spawnRandomMonster(level, poiId) {
        const selectedMonster = getAreaSpecificMonster(poiId, level);

        if (selectedMonster) {
            startBattle(selectedMonster);
        } else {
            addBattleLog('Nenhum monstro disponível nesta área.', 'log-info');
            const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
            if (currentPoi) {
                currentPoi.explored = true;
            }
            updatePoiMarkers();
            showSection('map-area');
        }
    }

    // --- Enhanced Passive Farming System ---
    function openPassiveFarmModal(poi) {
        player.passiveFarmData.poiId = poi.id;
        passiveFarmTitle.textContent = `Farm Passivo em ${poi.name}`;
        passiveFarmLog.innerHTML = '';
        passiveFarmFatigue.textContent = player.fatigue;
        passiveFarmHours.textContent = player.passiveFarmData.hoursFarmed;
        realTimeElapsed.textContent = '0h 0m';
        nextUpdateCountdown.textContent = '--';
        passiveFarmResults.classList.add('hidden');
        startPassiveFarmButton.classList.remove('hidden');
        stopPassiveFarmButton.classList.add('hidden');
        closePassiveFarmButton.classList.add('hidden');

        addPassiveFarmLog(`Você chegou em ${poi.name}.`);
        if (poi.type === 'forest') {
            addPassiveFarmLog(`Local de coleta de madeira. ${poi.resource ? `Recurso: ${poi.resource.type} (${poi.resource.abundance})` : ''}`);
            if (!player.inventory.some(item => item.name === 'Machado de Lenhador')) {
                addPassiveFarmLog('Você precisa de um Machado de Lenhador para farmar madeira.', 'log-error');
                startPassiveFarmButton.disabled = true;
            } else {
                startPassiveFarmButton.disabled = false;
            }
        } else if (poi.type === 'mountain') {
            addPassiveFarmLog(`Local de mineração. ${poi.resource ? `Recurso: ${poi.resource.type} (${poi.resource.abundance})` : ''}`);
            if (!player.inventory.some(item => item.name === 'Picareta de Ferro')) {
                addPassiveFarmLog('Você precisa de uma Picareta de Ferro para minerar.', 'log-error');
                startPassiveFarmButton.disabled = true;
            } else {
                startPassiveFarmButton.disabled = false;
            }
        } else if (poi.type === 'lake') {
            addPassiveFarmLog(`Local de pesca. ${poi.resource ? `Recurso: ${poi.resource.type} (${poi.resource.abundance})` : ''}`);
            if (!player.inventory.some(item => item.name.includes('Vara de Pesca'))) {
                addPassiveFarmLog('Você precisa de uma Vara de Pesca para pescar.', 'log-error');
                startPassiveFarmButton.disabled = true;
            } else {
                startPassiveFarmButton.disabled = false;
                // Show fishing conditions
                addPassiveFarmLog(`Condições atuais: ${gameTime.currentPhase === 'day' ? '☀️ Dia' : '🌙 Noite'}, ${gameTime.weather === 'clear' ? '☀️ Tempo limpo' : '🌧️ Chuva'}`);
                if (gameTime.weather === 'rain') {
                    addPassiveFarmLog('A chuva aumenta as chances de pesca!', 'log-info');
                }
                if (gameTime.currentPhase === 'night') {
                    addPassiveFarmLog('A pesca noturna pode ser mais produtiva!', 'log-info');
                }
            }
        } else if (poi.type === 'hunting-ground' || poi.type === 'cave') {
            addPassiveFarmLog('Você pode caçar monstros passivamente aqui.');
            startPassiveFarmButton.disabled = false;
        }

        showModal(passiveFarmModal);
    }

    function startPassiveFarm() {
        if (player.isPassiveFarming) return;

        const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
        if (!currentPoi) return;

        const now = Date.now();
        player.passiveFarmData = {
            poiId: currentPoi.id,
            startTime: now,
            lastUpdateTime: now,
            hoursFarmed: 0,
            totalExpGained: 0,
            totalGoldGained: 0,
            itemsCollected: {},
            initialPlayerLevel: player.level,
            levelUpsDuringFarm: 0,
        };
        levelupResults.innerHTML = '';

        player.isPassiveFarming = true;
        addPassiveFarmLog('Iniciando farm passivo em tempo real...', 'log-info');
        startPassiveFarmButton.classList.add('hidden');
        stopPassiveFarmButton.classList.remove('hidden');
        closePassiveFarmButton.classList.add('hidden');

        // Update every 5 minutes real time
        passiveFarmInterval = setInterval(updatePassiveFarm, FARM_UPDATE_INTERVAL_MS);

        // Countdown timer for next update
        let countdownInterval = setInterval(() => {
            if (!player.isPassiveFarming) {
                clearInterval(countdownInterval);
                return;
            }

            const now = Date.now();
            const nextUpdate = player.passiveFarmData.lastUpdateTime + FARM_UPDATE_INTERVAL_MS;
            const timeUntilUpdate = nextUpdate - now;

            if (timeUntilUpdate > 0) {
                const minutes = Math.floor(timeUntilUpdate / (60 * 1000));
                const seconds = Math.floor((timeUntilUpdate % (60 * 1000)) / 1000);
                nextUpdateCountdown.textContent = `${minutes}m ${seconds}s`;
            } else {
                nextUpdateCountdown.textContent = 'Atualizando...';
            }

            // Update elapsed time display
            const elapsedTime = now - player.passiveFarmData.startTime;
            const elapsedHours = Math.floor(elapsedTime / REAL_HOUR_MS);
            const elapsedMinutes = Math.floor((elapsedTime % REAL_HOUR_MS) / (60 * 1000));
            realTimeElapsed.textContent = `${elapsedHours}h ${elapsedMinutes}m`;
        }, 1000);

        mapArea.style.pointerEvents = 'none';
        document.querySelectorAll('.poi-marker').forEach(marker => marker.style.pointerEvents = 'none');
    }

    function updatePassiveFarm() {
        if (!player.isPassiveFarming) {
            clearInterval(passiveFarmInterval);
            return;
        }

        const now = Date.now();
        const timeSinceLastUpdate = now - player.passiveFarmData.lastUpdateTime;
        const hoursToProcess = timeSinceLastUpdate / REAL_HOUR_MS;

        // Process each hour that has passed
        const fullHours = Math.floor(hoursToProcess);
        for (let i = 0; i < fullHours; i++) {
            processPassiveFarmHour();
        }

        player.passiveFarmData.lastUpdateTime = now;

        // Stop if fatigue is too high
        if (player.fatigue >= 110) {
            stopPassiveFarm('Você atingiu o limite de fadiga!');
        }
    }

    function processPassiveFarmHour() {
        player.passiveFarmData.hoursFarmed++;
        player.fatigue += 5;

        addPassiveFarmLog(`Farmado por ${player.passiveFarmData.hoursFarmed} hora(s). Fadiga: ${player.fatigue}`);
        passiveFarmFatigue.textContent = player.fatigue;
        passiveFarmHours.textContent = player.passiveFarmData.hoursFarmed;

        updatePlayerStatsDisplay();
        updateCalculatedStats();

        const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
        if (!currentPoi) {
            stopPassiveFarm('Erro: POI não encontrado.');
            return;
        }

        if (currentPoi.type === 'hunting-ground' || currentPoi.type === 'cave') {
            // Get area-specific monster
            const farmedMonster = getAreaSpecificMonster(currentPoi.id, currentPoiLevel);

            if (farmedMonster) {
                const farmedExp = Math.max(1, Math.floor(farmedMonster.exp / 10));
                const farmedGold = Math.max(1, Math.floor(farmedMonster.gold / 10));

                gainExpAndGold(farmedExp, farmedGold, true);
                handleLootDrop(farmedMonster, true);

                // Gain weapon skill exp for passive farming
                if (player.equippedWeapon) {
                    const weaponType = getWeaponTypeFromItem(player.equippedWeapon);
                    gainWeaponSkillExp(weaponType, 5); // Fixed exp per hour for passive
                }
            }

        } else if (currentPoi.type === 'forest' && player.inventory.some(item => item.name === 'Machado de Lenhador')) {
            const areaContent = AREA_CONTENT[currentPoi.id];
            const possibleResources = areaContent ? areaContent.resources : ['Madeira Comum'];

            let resourceAmount = getRandomInt(1, 3);

            // Apply class bonuses
            if (player.class === 'crafter') {
                resourceAmount = Math.floor(resourceAmount * (1 + PLAYER_CLASSES.crafter.bonuses.resourceBonus));
            }

            // Apply global event modifier
            resourceAmount = Math.floor(resourceAmount * getEventModifier('resourceModifier', 1));

            const resourceName = possibleResources[getRandomInt(0, possibleResources.length - 1)];

            addItemToInventory(resourceName, resourceAmount);
            addPassiveFarmLog(`Coletou ${resourceAmount}x ${resourceName}.`, 'log-item');
            player.passiveFarmData.itemsCollected[resourceName] = (player.passiveFarmData.itemsCollected[resourceName] || 0) + resourceAmount;
            gainGatheringSkillExp('lumberjack', GATHERING_SKILLS_CONFIG.lumberjack.expPerHour * 0.1);

        } else if (currentPoi.type === 'mountain' && player.inventory.some(item => item.name === 'Picareta de Ferro')) {
            const areaContent = AREA_CONTENT[currentPoi.id];
            const possibleResources = areaContent ? areaContent.resources : ['Pedra Bruta'];

            let resourceAmount = getRandomInt(1, 2);

            // Apply class bonuses
            if (player.class === 'crafter') {
                resourceAmount = Math.floor(resourceAmount * (1 + PLAYER_CLASSES.crafter.bonuses.resourceBonus));
            }

            // Apply global event modifier
            resourceAmount = Math.floor(resourceAmount * getEventModifier('resourceModifier', 1));

            // Apply mining event modifier
            if (activeEvent && activeEvent.effects.miningExpModifier) {
                resourceAmount = Math.floor(resourceAmount * 1.2); // Slight resource bonus during mining events
            }

            const resourceName = possibleResources[getRandomInt(0, possibleResources.length - 1)];

            addItemToInventory(resourceName, resourceAmount);
            addPassiveFarmLog(`Minerou ${resourceAmount}x ${resourceName}.`, 'log-item');
            player.passiveFarmData.itemsCollected[resourceName] = (player.passiveFarmData.itemsCollected[resourceName] || 0) + resourceAmount;

            let miningExp = GATHERING_SKILLS_CONFIG.mining.expPerHour * 0.1;
            if (activeEvent && activeEvent.effects.miningExpModifier) {
                miningExp = Math.floor(miningExp * activeEvent.effects.miningExpModifier);
            }
            gainGatheringSkillExp('mining', miningExp);

        } else if (currentPoi.type === 'lake' && player.inventory.some(item => item.name.includes('Vara de Pesca'))) {
            const areaContent = AREA_CONTENT[currentPoi.id];
            const possibleResources = areaContent ? areaContent.resources : ['Peixe Comum'];

            let resourceAmount = getRandomInt(1, 2);

            // Apply fishing modifiers
            resourceAmount = Math.floor(resourceAmount * getFishingModifier('resource', 1));

            // Apply class bonuses
            if (player.class === 'crafter') {
                resourceAmount = Math.floor(resourceAmount * (1 + PLAYER_CLASSES.crafter.bonuses.resourceBonus));
            }

            // Apply skill bonuses
            const resourceBonus = getSkillBonus('gathering', 'fishing', 'resource_bonus');
            if (Math.random() < resourceBonus) {
                resourceAmount++;
            }

            const resourceName = possibleResources[getRandomInt(0, possibleResources.length - 1)];

            addItemToInventory(resourceName, resourceAmount);
            addPassiveFarmLog(`Pescou ${resourceAmount}x ${resourceName}.`, 'log-item');
            player.passiveFarmData.itemsCollected[resourceName] = (player.passiveFarmData.itemsCollected[resourceName] || 0) + resourceAmount;
            gainGatheringSkillExp('fishing', GATHERING_SKILLS_CONFIG.fishing.expPerHour * 0.1);
        }
    }

    function stopPassiveFarm(reason = 'Você parou de farmar.') {
        player.isPassiveFarming = false;
        clearInterval(passiveFarmInterval);
        addPassiveFarmLog(reason, 'log-info');

        startPassiveFarmButton.classList.add('hidden');
        stopPassiveFarmButton.classList.add('hidden');
        closePassiveFarmButton.classList.remove('hidden');

        passiveFarmResults.classList.remove('hidden');
        farmGoldGained.textContent = player.passiveFarmData.totalGoldGained;
        farmExpGained.textContent = player.passiveFarmData.totalExpGained;

        farmItemsCollected.innerHTML = '';
        for (const item in player.passiveFarmData.itemsCollected) {
            const li = document.createElement('li');
            li.textContent = `${item}: ${player.passiveFarmData.itemsCollected[item]}`;
            farmItemsCollected.appendChild(li);
        }

        mapArea.style.pointerEvents = 'auto';
        document.querySelectorAll('.poi-marker').forEach(marker => marker.style.pointerEvents = 'auto');
        updatePlayerStatsDisplay();
        updateCalculatedStats();
    }

    function startGameTimeInterval() {
        clearInterval(gameTimeInterval);
        gameTimeInterval = setInterval(() => {
            updateGameTime();
            processStatusEffects();
            updateActiveCrafts();
            processCastleIncome();

            // Trigger random events occasionally
            if (Math.random() < 0.01) { // 1% chance every minute
                triggerRandomEvent();
            }
        }, 60000); // Every real minute
    }

    function endGame() {
        addBattleLog('Fim de Jogo! Você foi derrotado.', 'log-error');
        attackButton.disabled = true;
        fleeButton.disabled = true;
        resetButton.classList.remove('hidden');
        clearInterval(gameTimeInterval);
        stopPassiveFarm();
        endGlobalEvent();
    }

    function resetGame() {
        player = {
            name: '',
            class: null,
            hp: 75,
            maxHp: 75,
            strength: 1,
            resistance: 1,
            agility: 1,
            intelligence: 1,
            minDamage: 10,
            maxDamage: 10,
            defense: 0,
            gold: 0,
            isAlive: true,
            inventory: [],
            currentWeight: 0,
            maxWeight: 50.0,
            level: 1,
            exp: 0,
            expToNextLevel: 100,
            skillPoints: 0,
            fatigue: 0,
            fatiguePerTravel: 5,
            fatiguePerBattle: 10,
            restFatigueReduction: 50,
            restCost: 10,
            equippedWeapon: null,
            equippedArmor: null,
            activeEffects: [],
            currentLocationId: 'start_village',
            isTraveling: false,
            travelArrow: {
                startPoi: null,
                endPoi: null,
                progress: 0,
                duration: 0,
                startTime: 0
            },
            selectedInventoryItem: null,
            isPassiveFarming: false,
            passiveFarmData: {
                poiId: null,
                startTime: 0,
                lastUpdateTime: 0,
                hoursFarmed: 0,
                totalExpGained: 0,
                totalGoldGained: 0,
                itemsCollected: {},
                initialPlayerLevel: 1,
                levelUpsDuringFarm: 0,
            },
            locationExperience: {},
            weaponSkills: {},
            gatheringSkills: {},
            knownRecipes: [],
            activeCrafts: [],
            ownedCastles: [],
            ownedLocations: [],
            isConqueringCastle: false,
            conquestData: {
                castleId: null,
                startTime: 0,
                progress: 0
            },
            guild: null,
            ownedGuild: null
        };
        currentMonster = null;
        currentPoiLevel = 1;
        selectedClass = null;
        activeEvent = null;
        guilds = {};

        // Reset game time
        gameTime = {
            dayStartTime: Date.now(),
            cycleDuration: 160 * 60 * 1000,
            currentPhase: 'day',
            weather: 'clear',
            weatherChangeTime: Date.now(),
            lastPhaseCheck: Date.now()
        };

        clearInterval(gameTimeInterval);
        clearInterval(passiveFarmInterval);
        clearInterval(gatheringInterval);

        pointsOfInterest.forEach(poi => {
            if (poi.type === 'hunting-ground' || poi.type === 'cave' || poi.type === 'forest' || poi.type === 'mountain' || poi.type === 'lake') {
                poi.explored = false;
                poi.owner = null;
            } else if (poi.id === 'start_village') {
                poi.explored = true;
            }
            if (poi.initialStock) {
                poi.stock = { ...poi.initialStock };
                poi.lastRestockTime = 0;
            }
            if (poi.type === 'castle' || poi.type === 'capital') {
                poi.owner = null;
                poi.lastIncome = 0;
            }
        });

        scale = 1.0;
        offsetX = 0;
        offsetY = 0;
        applyMapTransform();

        hideModal(nameModal);
        hideModal(classModal);
        endGlobalEvent();

        updatePlayerStatsDisplay();
        updateInventoryDisplay();
        updatePoiMarkers();
        updateMapVisuals();
        battleLogEl.innerHTML = '';
        resetButton.classList.add('hidden');
        showSection('map-area');

        // Show name modal to restart
        showModal(nameModal);
        playerNameInput.value = '';
        playerNameInput.focus();
    }

    // --- Information Panel System (F key) ---
    function showInformationPanel() {
        const infoModal = document.getElementById('info-panel-modal');
        if (infoModal) {
            setupInfoPanelTabs();
            updateGuildContent();
            showModal(infoModal);
        }
    }

    function setupInfoPanelTabs() {
        const tabButtons = document.querySelectorAll('.info-tab-button');
        const tabContents = document.querySelectorAll('.info-tab-content');

        // Remove existing event listeners and add new ones
        tabButtons.forEach(button => {
            button.replaceWith(button.cloneNode(true));
        });

        // Re-select after replacing
        const newTabButtons = document.querySelectorAll('.info-tab-button');
        
        newTabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.dataset.tab;
                
                // Update button states
                newTabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update tab content visibility
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                
                const targetContent = document.getElementById(`${targetTab}-tab`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }

                // Update content based on active tab
                if (targetTab === 'guild-info') {
                    updateGuildContent();
                } else if (targetTab === 'world-info') {
                    setupWorldInfoExpandables();
                } else if (targetTab === 'economy-info') {
                    updateEconomyContent();
                }
            });
        });

        // Setup expandable headers for world info
        setupWorldInfoExpandables();
    }

    function setupWorldInfoExpandables() {
        const expandableHeaders = document.querySelectorAll('#world-info-tab .expandable-header');
        
        expandableHeaders.forEach(header => {
            header.replaceWith(header.cloneNode(true));
        });

        // Re-select after replacing
        const newHeaders = document.querySelectorAll('#world-info-tab .expandable-header');
        
        newHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const category = header.dataset.category;
                const content = document.getElementById(`${category}-content`);
                const icon = header.querySelector('.expand-icon');

                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.textContent = '-';
                    updateCategoryContent(category);
                } else {
                    content.classList.add('hidden');
                    icon.textContent = '+';
                }
            });
        });
    }

    function updateCategoryContent(category) {
        const content = document.getElementById(`${category}-content`);
        content.innerHTML = '';

        switch (category) {
            case 'castles':
                pointsOfInterest.filter(p => p.type === 'castle').forEach(castle => {
                    const div = document.createElement('div');
                    div.className = 'location-item';
                    div.innerHTML = `
                        <span class="location-name">${castle.name}</span>
                        <span class="location-owner">${castle.owner || 'Não conquistado'}</span>
                        <button class="focus-location-btn" data-poi-id="${castle.id}">Focar no Mapa</button>
                    `;
                    content.appendChild(div);
                });
                break;

            case 'capitals':
                pointsOfInterest.filter(p => p.type === 'capital').forEach(capital => {
                    const div = document.createElement('div');
                    div.className = 'location-item';
                    div.innerHTML = `
                        <span class="location-name">${capital.name}</span>
                        <span class="location-owner">${capital.owner || 'Não conquistado'}</span>
                        <button class="focus-location-btn" data-poi-id="${capital.id}">Focar no Mapa</button>
                    `;
                    content.appendChild(div);
                });
                break;

            case 'forests':
                pointsOfInterest.filter(p => p.type === 'forest').forEach(forest => {
                    const div = document.createElement('div');
                    div.className = 'location-item';
                    div.innerHTML = `
                        <span class="location-name">${forest.name}</span>
                        <span class="location-owner">${forest.owner || 'Livre'}</span>
                        <span class="location-resource">${forest.resource ? forest.resource.type : 'N/A'}</span>
                        <button class="focus-location-btn" data-poi-id="${forest.id}">Focar no Mapa</button>
                    `;
                    content.appendChild(div);
                });
                break;

            case 'mountains':
                pointsOfInterest.filter(p => p.type === 'mountain').forEach(mountain => {
                    const div = document.createElement('div');
                    div.className = 'location-item';
                    div.innerHTML = `
                        <span class="location-name">${mountain.name}</span>
                        <span class="location-owner">${mountain.owner || 'Livre'}</span>
                        <span class="location-resource">${mountain.resource ? mountain.resource.type : 'N/A'}</span>
                        <button class="focus-location-btn" data-poi-id="${mountain.id}">Focar no Mapa</button>
                    `;
                    content.appendChild(div);
                });
                break;

            case 'lakes':
                pointsOfInterest.filter(p => p.type === 'lake').forEach(lake => {
                    const div = document.createElement('div');
                    div.className = 'location-item';
                    div.innerHTML = `
                        <span class="location-name">${lake.name}</span>
                        <span class="location-owner">${lake.owner || 'Livre'}</span>
                        <span class="location-resource">${lake.resource ? lake.resource.type : 'N/A'}</span>
                        <button class="focus-location-btn" data-poi-id="${lake.id}">Focar no Mapa</button>
                    `;
                    content.appendChild(div);
                });
                break;

            case 'hunting':
                pointsOfInterest.filter(p => p.type === 'hunting-ground' || p.type === 'cave').forEach(hunting => {
                    const div = document.createElement('div');
                    div.className = 'location-item';
                    div.innerHTML = `
                        <span class="location-name">${hunting.name}</span>
                        <span class="location-owner">${hunting.owner || 'Livre'}</span>
                        <span class="location-level">Nível ${hunting.levelRange[0]}-${hunting.levelRange[1]}</span>
                        <button class="focus-location-btn" data-poi-id="${hunting.id}">Focar no Mapa</button>
                    `;
                    content.appendChild(div);
                });
                break;

            case 'guilds':
                if (Object.keys(guilds).length === 0) {
                    content.innerHTML = '<p>Nenhuma guilda criada ainda.</p>';
                } else {
                    for (const guildId in guilds) {
                        const guild = guilds[guildId];
                        const div = document.createElement('div');
                        div.className = 'guild-item';
                        div.innerHTML = `
                            <h4>${guild.name}</h4>
                            <p>Líder: ${guild.leader}</p>
                            <p>Membros: ${guild.members.length}</p>
                            <p>Localizações: ${guild.ownedLocations.length}</p>
                        `;
                        content.appendChild(div);
                    }
                }
                break;
        }

        // Add focus functionality to buttons
        content.querySelectorAll('.focus-location-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const poiId = btn.dataset.poiId;
                focusOnLocation(poiId);
                hideModal(document.getElementById('info-panel-modal'));
            });
        });
    }

    function updateGuildContent() {
        const guildContentDisplay = document.getElementById('guild-content-display');
        if (!guildContentDisplay) return;

        if (player.guild) {
            const guild = guilds[player.guild];
            if (guild) {
                guildContentDisplay.innerHTML = `
                    <div class="guild-info">
                        <h3>${guild.name}</h3>
                        <p><strong>Membros:</strong> ${guild.members.length}</p>
                        <div class="guild-members">
                            <h4>Lista de Membros:</h4>
                            <ul>
                                ${guild.members.map(member => `
                                    <li class="guild-member">
                                        ${member === guild.leader ? '👑 ' : ''}${member}
                                        ${member === guild.leader ? ' (Líder)' : ''}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="guild-level-info">
                            <h4>Nível da Guilda: ${guild.level}</h4>
                            <p><strong>Tesouro:</strong> ${guild.treasury} ouro</p>
                            <p><strong>Bônus Ativo:</strong></p>
                            <ul>
                                <li>+${guild.expBonus}% EXP Global</li>
                                <li>+${guild.skillExpBonus}% EXP de Perícias</li>
                                <li>+${guild.gatheringExpBonus}% EXP de Coleta</li>
                            </ul>
                            ${guild.level < 10 ? `
                                <div class="guild-upgrade">
                                    <p><strong>Próximo Nível:</strong> ${GUILD_LEVELS[guild.level + 1].goldRequired - guild.totalDonations} ouro restante</p>
                                    <div class="donation-section">
                                        <input type="number" id="donation-amount" placeholder="Quantidade de ouro" min="1" max="${player.gold}">
                                        <button id="donate-guild-btn" class="guild-action-btn">Doar para Guilda</button>
                                    </div>
                                </div>
                            ` : '<p class="max-level">Nível Máximo Atingido!</p>'}
                        </div>
                        <div class="guild-actions">
                            <button id="leave-guild-btn" class="guild-action-btn">Deixar Guilda</button>
                        </div>
                    </div>
                `;

                // Add leave guild functionality
                const leaveGuildBtn = document.getElementById('leave-guild-btn');
                if (leaveGuildBtn) {
                    leaveGuildBtn.addEventListener('click', () => {
                        leaveGuild();
                        updateGuildContent();
                    });
                }

                // Add donation functionality
                const donateBtn = document.getElementById('donate-guild-btn');
                const donationInput = document.getElementById('donation-amount');
                if (donateBtn && donationInput) {
                    donateBtn.addEventListener('click', () => {
                        const amount = parseInt(donationInput.value);
                        if (amount > 0 && amount <= player.gold) {
                            donateToGuild(amount);
                            updateGuildContent();
                        } else {
                            addBattleLog('Quantidade inválida ou ouro insuficiente.', 'log-error');
                        }
                    });
                }
            }
        } else {
            guildContentDisplay.innerHTML = `
                <div class="no-guild">
                    <p>Você não está em uma guilda.</p>
                    <div class="guild-options">
                        <div class="guild-option">
                            <h4>Criar Nova Guilda</h4>
                            <input type="text" id="new-guild-name" placeholder="Nome da guilda" maxlength="30">
                            <button id="create-guild-btn" class="guild-action-btn">Criar Guilda</button>
                        </div>
                        <div class="guild-option">
                            <h4>Juntar-se a uma Guilda</h4>
                            <select id="available-guilds">
                                <option value="">Selecione uma guilda...</option>
                                ${Object.entries(guilds).map(([id, guild]) => 
                                    `<option value="${id}">${guild.name} (${guild.members.length} membros)</option>`
                                ).join('')}
                            </select>
                            <button id="join-guild-btn" class="guild-action-btn">Entrar na Guilda</button>
                        </div>
                    </div>
                </div>
            `;

            // Add create guild functionality
            const createGuildBtn = document.getElementById('create-guild-btn');
            const newGuildNameInput = document.getElementById('new-guild-name');
            if (createGuildBtn && newGuildNameInput) {
                createGuildBtn.addEventListener('click', () => {
                    const guildName = newGuildNameInput.value.trim();
                    if (guildName.length >= 3) {
                        createGuild(guildName);
                        updateGuildContent();
                    } else {
                        addBattleLog('Nome da guilda deve ter pelo menos 3 caracteres.', 'log-error');
                    }
                });
            }

            // Add join guild functionality
            const joinGuildBtn = document.getElementById('join-guild-btn');
            const availableGuildsSelect = document.getElementById('available-guilds');
            if (joinGuildBtn && availableGuildsSelect) {
                joinGuildBtn.addEventListener('click', () => {
                    const selectedGuildId = availableGuildsSelect.value;
                    if (selectedGuildId) {
                        joinGuild(selectedGuildId);
                        updateGuildContent();
                    } else {
                        addBattleLog('Selecione uma guilda para entrar.', 'log-error');
                    }
                });
            }
        }

        // Add guild list section at the bottom
        const guildListSection = `
            <div class="guild-list-section">
                <h3>Todas as Guildas do Servidor</h3>
                <div class="guild-list">
                    ${Object.entries(guilds).map(([id, guild]) => `
                        <div class="guild-list-item" data-guild-id="${id}">
                            <div class="guild-basic-info">
                                <h4>${guild.name} (Nível ${guild.level})</h4>
                                <p>${guild.members.length} membros</p>
                            </div>
                            <button class="view-guild-btn" data-guild-id="${id}">Ver Membros</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        guildContentDisplay.innerHTML += guildListSection;

        // Add view guild functionality
        const viewGuildBtns = document.querySelectorAll('.view-guild-btn');
        viewGuildBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const guildId = e.target.dataset.guildId;
                showGuildDetails(guildId);
            });
        });
    }

    function createGuild(guildName) {
        const guildId = 'guild_' + Date.now();
        guilds[guildId] = {
            id: guildId,
            name: guildName,
            leader: player.name,
            members: [player.name],
            ownedLocations: [],
            createdAt: Date.now(),
            level: 1,
            treasury: 0,
            totalDonations: 0,
            expBonus: 0,
            skillExpBonus: 0,
            gatheringExpBonus: 0,
            capitalUpgrades: {}
        };
        
        player.guild = guildId;
        addBattleLog(`Guilda "${guildName}" criada com sucesso!`, 'log-success');
    }

    function joinGuild(guildId) {
        const guild = guilds[guildId];
        if (guild && !guild.members.includes(player.name)) {
            guild.members.push(player.name);
            player.guild = guildId;
            addBattleLog(`Você entrou na guilda "${guild.name}"!`, 'log-success');
        } else if (guild && guild.members.includes(player.name)) {
            addBattleLog('Você já está nesta guilda.', 'log-warning');
        } else {
            addBattleLog('Guilda não encontrada.', 'log-error');
        }
    }

    function leaveGuild() {
        if (player.guild) {
            const guild = guilds[player.guild];
            if (guild) {
                guild.members = guild.members.filter(member => member !== player.name);
                
                // If player was the leader and there are other members, transfer leadership
                if (guild.leader === player.name && guild.members.length > 0) {
                    guild.leader = guild.members[0];
                    addBattleLog(`Liderança da guilda transferida para ${guild.leader}.`, 'log-info');
                }
                
                // If no members left, delete the guild
                if (guild.members.length === 0) {
                    delete guilds[player.guild];
                    addBattleLog('Guilda foi dissolvida pois não há mais membros.', 'log-info');
                }
                
                addBattleLog(`Você saiu da guilda "${guild.name}".`, 'log-success');
            }
            player.guild = null;
        }
    }

    function donateToGuild(amount) {
        if (player.guild && player.gold >= amount) {
            const guild = guilds[player.guild];
            if (guild) {
                player.gold -= amount;
                guild.treasury += amount;
                guild.totalDonations += amount;
                
                // Check for level up
                checkGuildLevelUp(guild);
                
                addBattleLog(`Você doou ${amount} ouro para a guilda "${guild.name}".`, 'log-success');
            }
        }
    }

    function checkGuildLevelUp(guild) {
        const nextLevel = guild.level + 1;
        if (nextLevel <= 10 && guild.totalDonations >= GUILD_LEVELS[nextLevel].goldRequired) {
            guild.level = nextLevel;
            const levelData = GUILD_LEVELS[nextLevel];
            guild.expBonus = levelData.expBonus;
            guild.skillExpBonus = levelData.skillExpBonus;
            guild.gatheringExpBonus = levelData.gatheringExpBonus;
            
            addBattleLog(`A guilda "${guild.name}" subiu para o nível ${nextLevel}!`, 'log-success');
            addBattleLog(`Novos bônus: +${levelData.expBonus}% EXP Global, +${levelData.skillExpBonus}% EXP Perícias, +${levelData.gatheringExpBonus}% EXP Coleta`, 'log-info');
        }
    }

    function showGuildDetails(guildId) {
        const guild = guilds[guildId];
        if (!guild) return;
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-guild-details">&times;</span>
                <h2>${guild.name} (Nível ${guild.level})</h2>
                <p><strong>Líder:</strong> ${guild.leader}</p>
                <p><strong>Membros (${guild.members.length}):</strong></p>
                <ul class="guild-members-detail">
                    ${guild.members.map(member => `
                        <li>${member === guild.leader ? '👑 ' : ''}${member}</li>
                    `).join('')}
                </ul>
                <div class="guild-stats">
                    <p><strong>Bônus da Guilda:</strong></p>
                    <ul>
                        <li>+${guild.expBonus}% EXP Global</li>
                        <li>+${guild.skillExpBonus}% EXP de Perícias</li>
                        <li>+${guild.gatheringExpBonus}% EXP de Coleta</li>
                    </ul>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.close-guild-details').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        showModal(modal);
    }

    function updateEconomyContent() {
        const economyContentDisplay = document.getElementById('economy-content-display');
        if (!economyContentDisplay) return;

        // Find all capitals controlled by guilds
        const controlledCapitals = pointsOfInterest.filter(poi => 
            poi.type === 'capital' && poi.owner && guilds[poi.owner]
        );

        if (controlledCapitals.length === 0) {
            economyContentDisplay.innerHTML = `
                <div class="no-economy-data">
                    <p>Nenhuma capital está sob controle de guildas atualmente.</p>
                    <p>Conquiste capitais para estabelecer economias regionais!</p>
                </div>
            `;
            return;
        }

        let economyHTML = '<div class="economy-regions">';
        
        controlledCapitals.forEach(capital => {
            const guild = guilds[capital.owner];
            const capitalLevel = capital.level || 1;
            const economyValue = capital.economy || 1.0;
            const taxRate = capital.taxRate || 0;
            
            economyHTML += `
                <div class="economy-region">
                    <h3>${capital.name}</h3>
                    <div class="economy-stats">
                        <p><strong>Controlado por:</strong> ${guild.name}</p>
                        <p><strong>Nível da Capital:</strong> ${capitalLevel}</p>
                        <p><strong>Valor da Moeda:</strong> ${(economyValue * 100).toFixed(1)}%</p>
                        <p><strong>Taxa de Imposto:</strong> ${taxRate}%</p>
                        <div class="economy-effects">
                            <h4>Efeitos Regionais:</h4>
                            <ul>
                                <li>Preços nas lojas: ${economyValue < 1 ? 'Reduzidos' : economyValue > 1 ? 'Aumentados' : 'Normal'}</li>
                                <li>Custos para membros da guilda: ${economyValue < 1 ? 'Reduzidos' : 'Normal'}</li>
                                <li>Receita diária: +${(capitalLevel * 100)} ouro base</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        
        economyHTML += '</div>';
        economyContentDisplay.innerHTML = economyHTML;
    }

    // --- Skill System Functions ---
    function addGatheringExp(skillName, expAmount) {
        if (!player.gatheringSkills[skillName]) {
            player.gatheringSkills[skillName] = { level: 1, exp: 0 };
        }

        const skill = player.gatheringSkills[skillName];
        const oldLevel = skill.level;
        skill.exp += expAmount;

        // Check for level up
        const skillConfig = GATHERING_SKILLS_CONFIG[skillName];
        if (skillConfig && skill.level < skillConfig.expToNextLevel.length - 1) {
            while (skill.exp >= skillConfig.expToNextLevel[skill.level] && skill.level < skillConfig.expToNextLevel.length - 1) {
                skill.level++;
                addBattleLog(`${skillConfig.name} subiu para nível ${skill.level}!`, 'log-success');
                
                // Check for profession unlock at level 2
                if (skill.level === 2 && !player.profession) {
                    checkProfessionUnlock();
                }
            }
        }

        updatePlayerStatsDisplay();
    }

    function checkProfessionUnlock() {
        const availableProfessions = [];
        
        // Check which professions can be unlocked based on level 2+ gathering skills
        for (const [professionKey, profession] of Object.entries(PROFESSIONS)) {
            const requiredSkill = profession.requiredSkill;
            if (player.gatheringSkills[requiredSkill] && player.gatheringSkills[requiredSkill].level >= 2) {
                availableProfessions.push(professionKey);
            }
        }

        if (availableProfessions.length > 0 && !player.profession) {
            showProfessionSelection(availableProfessions);
        }
    }

    function showProfessionSelection(availableProfessions) {
        // Clear previous selections
        professionSelection.innerHTML = '';
        
        // Add profession options
        availableProfessions.forEach(professionKey => {
            const profession = PROFESSIONS[professionKey];
            const div = document.createElement('div');
            div.className = 'class-option';
            div.dataset.profession = professionKey;
            div.innerHTML = `
                <h3>${profession.icon} ${profession.name}</h3>
                <p>${profession.description}</p>
                <ul>
                    <li>+${Math.floor((profession.gatheringBonus - 1) * 100)}% bônus de coleta em ${GATHERING_SKILLS_CONFIG[profession.requiredSkill].name}</li>
                    <li>Habilidades especiais de profissão</li>
                </ul>
            `;
            professionSelection.appendChild(div);
        });

        // Add click listeners
        const professionOptions = professionSelection.querySelectorAll('.class-option');
        professionOptions.forEach(option => {
            option.addEventListener('click', () => {
                professionOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                selectProfessionButton.disabled = false;
                selectProfessionButton.dataset.profession = option.dataset.profession;
            });
        });

        showModal(professionModal);
    }

    function selectProfession(professionKey) {
        player.profession = professionKey;
        const profession = PROFESSIONS[professionKey];
        addBattleLog(`Você se tornou um ${profession.name}! ${profession.description}`, 'log-success');
        hideModal(professionModal);
        updatePlayerStatsDisplay();
    }

    function getGatheringBonus(skillName) {
        let bonus = 1.0;
        
        // Apply profession bonus
        if (player.profession) {
            const profession = PROFESSIONS[player.profession];
            if (profession.requiredSkill === skillName) {
                bonus *= profession.gatheringBonus;
            }
        }

        // Apply skill bonuses
        if (player.gatheringSkills[skillName]) {
            const skill = player.gatheringSkills[skillName];
            const skillConfig = GATHERING_SKILLS_CONFIG[skillName];
            
            if (skillConfig) {
                for (const [level, bonusData] of Object.entries(skillConfig.bonuses)) {
                    if (skill.level >= parseInt(level)) {
                        if (bonusData.type === 'resource_bonus') {
                            bonus *= (1 + bonusData.value);
                        }
                    }
                }
            }
        }

        return bonus;
    }

    function hasSkillBonus(skillType, skillName, bonusType) {
        if (skillType === 'weapon') {
            return player.weaponSkills[skillName] && 
                   WEAPON_SKILLS_CONFIG[skillName] && 
                   Object.values(WEAPON_SKILLS_CONFIG[skillName].bonuses).some(bonus => 
                       bonus.type === bonusType && player.weaponSkills[skillName].level >= Object.keys(WEAPON_SKILLS_CONFIG[skillName].bonuses).find(level => 
                           WEAPON_SKILLS_CONFIG[skillName].bonuses[level].type === bonusType
                       )
                   );
        } else if (skillType === 'gathering') {
            return player.gatheringSkills[skillName] && 
                   GATHERING_SKILLS_CONFIG[skillName] && 
                   Object.values(GATHERING_SKILLS_CONFIG[skillName].bonuses).some(bonus => 
                       bonus.type === bonusType && player.gatheringSkills[skillName].level >= Object.keys(GATHERING_SKILLS_CONFIG[skillName].bonuses).find(level => 
                           GATHERING_SKILLS_CONFIG[skillName].bonuses[level].type === bonusType
                       )
                   );
        }
        return false;
    }

    function getSkillBonus(skillType, skillName, bonusType) {
        let totalBonus = 0;
        
        if (skillType === 'weapon' && player.weaponSkills[skillName] && WEAPON_SKILLS_CONFIG[skillName]) {
            const skill = player.weaponSkills[skillName];
            const skillConfig = WEAPON_SKILLS_CONFIG[skillName];
            
            for (const [level, bonusData] of Object.entries(skillConfig.bonuses)) {
                if (skill.level >= parseInt(level) && bonusData.type === bonusType) {
                    totalBonus += bonusData.value;
                }
            }
        } else if (skillType === 'gathering' && player.gatheringSkills[skillName] && GATHERING_SKILLS_CONFIG[skillName]) {
            const skill = player.gatheringSkills[skillName];
            const skillConfig = GATHERING_SKILLS_CONFIG[skillName];
            
            for (const [level, bonusData] of Object.entries(skillConfig.bonuses)) {
                if (skill.level >= parseInt(level) && bonusData.type === bonusType) {
                    totalBonus += bonusData.value;
                }
            }
                 }
         
         return totalBonus;
     }

     function getGuildGatheringBonus() {
         if (player.guild && guilds[player.guild]) {
             const guild = guilds[player.guild];
             return 1 + (guild.gatheringExpBonus / 100);
         }
         return 1.0;
     }

     function getGuildExpBonus() {
         if (player.guild && guilds[player.guild]) {
             const guild = guilds[player.guild];
             return 1 + (guild.expBonus / 100);
         }
         return 1.0;
     }

     function getGuildSkillExpBonus() {
         if (player.guild && guilds[player.guild]) {
             const guild = guilds[player.guild];
             return 1 + (guild.skillExpBonus / 100);
         }
         return 1.0;
     }

    // --- Season and World Time System ---
    function updateWorldTime() {
        const now = Date.now();
        
        // Calculate days since world creation
        const daysSinceCreation = Math.floor((now - worldTime.creationDate) / (24 * 60 * 60 * 1000)) + 1;
        worldTime.daysSinceCreation = daysSinceCreation;
        
        // Check if season should change (every 7 real days)
        const seasonsSinceCreation = Math.floor((now - worldTime.creationDate) / worldTime.seasonDuration);
        const seasonNames = Object.keys(SEASONS);
        const currentSeasonIndex = seasonsSinceCreation % seasonNames.length;
        const newSeason = seasonNames[currentSeasonIndex];
        
        if (newSeason !== worldTime.currentSeason) {
            worldTime.currentSeason = newSeason;
            worldTime.seasonStartTime = now;
            addBattleLog(`A estação mudou para ${SEASONS[newSeason].name}! ${SEASONS[newSeason].icon}`, 'log-info');
            
            // Trigger season-based events
            triggerSeasonalEvents(newSeason);
        }
        
        updateWorldDisplay();
    }
    
    function updateWorldDisplay() {
        if (worldDayEl) worldDayEl.textContent = worldTime.daysSinceCreation;
        if (worldSeasonEl) worldSeasonEl.textContent = `${SEASONS[worldTime.currentSeason].icon} ${SEASONS[worldTime.currentSeason].name}`;
        if (worldWeatherEl) worldWeatherEl.textContent = gameTime.weather === 'clear' ? '☀️ Ensolarado' : '🌧️ Chuva';
        if (worldPhaseEl) worldPhaseEl.textContent = gameTime.currentPhase === 'day' ? '☀️ Dia' : '🌙 Noite';
        
        // Update game time
        const now = Date.now();
        const secondsElapsed = (now - gameTime.startTime) / 1000;
        const gameMinutesElapsed = secondsElapsed * gameTime.minutesPerRealSecond;
        const totalGameMinutes = (gameTime.currentHour * 60) + gameMinutesElapsed;
        
        const currentGameHour = Math.floor((totalGameMinutes / 60) % 24);
        const currentGameMinute = Math.floor(totalGameMinutes % 60);
        
        const timeString = `${currentGameHour.toString().padStart(2, '0')}:${currentGameMinute.toString().padStart(2, '0')}`;
        if (gameTimeEl) gameTimeEl.textContent = timeString;
        
        // Update day/night phase based on game time
        const newPhase = (currentGameHour >= 6 && currentGameHour < 18) ? 'day' : 'night';
        if (newPhase !== gameTime.currentPhase) {
            gameTime.currentPhase = newPhase;
        }
    }
    
    function triggerSeasonalEvents(season) {
        const seasonData = SEASONS[season];
        if (seasonData && seasonData.events.length > 0) {
            // Randomly trigger one of the season's events
            const randomEvent = seasonData.events[Math.floor(Math.random() * seasonData.events.length)];
            
            // Define seasonal events
            const seasonalEvents = {
                'flower_bloom': {
                    name: 'Florescimento',
                    description: 'As flores estão florescendo por toda parte!',
                    duration: 3 * 24 * 60 * 60 * 1000, // 3 days
                    effects: {
                        gatheringExpModifier: 1.2,
                        resourceModifier: 1.15
                    }
                },
                'rain_season': {
                    name: 'Temporada de Chuvas',
                    description: 'Chuvas frequentes beneficiam a pesca.',
                    duration: 2 * 24 * 60 * 60 * 1000, // 2 days
                    effects: {
                        fishingResourceModifier: 1.3,
                        fishingExpModifier: 1.2
                    }
                },
                'heat_wave': {
                    name: 'Onda de Calor',
                    description: 'O calor intenso afeta a coleta.',
                    duration: 2 * 24 * 60 * 60 * 1000, // 2 days
                    effects: {
                        fatigueModifier: 1.3,
                        gatheringExpModifier: 0.9
                    }
                },
                'drought': {
                    name: 'Seca',
                    description: 'A falta de chuva dificulta a pesca.',
                    duration: 3 * 24 * 60 * 60 * 1000, // 3 days
                    effects: {
                        fishingResourceModifier: 0.7,
                        miningExpModifier: 1.1
                    }
                },
                'harvest_time': {
                    name: 'Tempo de Colheita',
                    description: 'A colheita está abundante!',
                    duration: 4 * 24 * 60 * 60 * 1000, // 4 days
                    effects: {
                        resourceModifier: 1.25,
                        globalExpModifier: 1.1
                    }
                },
                'cold_winds': {
                    name: 'Ventos Frios',
                    description: 'Ventos frios tornam as atividades mais difíceis.',
                    duration: 2 * 24 * 60 * 60 * 1000, // 2 days
                    effects: {
                        fatigueModifier: 1.2,
                        combatExpModifier: 1.1
                    }
                },
                'snow_storm': {
                    name: 'Tempestade de Neve',
                    description: 'Uma tempestade de neve cobre a terra.',
                    duration: 3 * 24 * 60 * 60 * 1000, // 3 days
                    effects: {
                        gatheringExpModifier: 0.8,
                        damageReceivedModifier: 1.1,
                        nightRareChanceModifier: 1.2
                    }
                },
                'ice_age': {
                    name: 'Era Glacial',
                    description: 'O frio intenso congela tudo.',
                    duration: 5 * 24 * 60 * 60 * 1000, // 5 days
                    effects: {
                        fatigueModifier: 1.4,
                        craftTimeModifier: 1.2,
                        statusEffectModifier: 1.3
                    }
                },
                'magical_growth': {
                    name: 'Crescimento Mágico',
                    description: 'Energias mágicas aceleram o crescimento.',
                    duration: 2 * 24 * 60 * 60 * 1000,
                    effects: { gatheringExpModifier: 1.3, resourceModifier: 1.2 }
                },
                'spring_festival': {
                    name: 'Festival da Primavera',
                    description: 'Celebrações aumentam o moral.',
                    duration: 3 * 24 * 60 * 60 * 1000,
                    effects: { globalExpModifier: 1.15, fatigueModifier: 0.8 }
                },
                'pollen_storm': {
                    name: 'Tempestade de Pólen',
                    description: 'Pólen no ar afeta alquimistas.',
                    duration: 1 * 24 * 60 * 60 * 1000,
                    effects: { gatheringExpModifier: 0.9, resourceModifier: 1.4 }
                },
                'nature_blessing': {
                    name: 'Bênção da Natureza',
                    description: 'A natureza abençoa os coletores.',
                    duration: 4 * 24 * 60 * 60 * 1000,
                    effects: { gatheringExpModifier: 1.25, resourceModifier: 1.15 }
                },
                'green_tide': {
                    name: 'Maré Verde',
                    description: 'Plantas crescem descontroladamente.',
                    duration: 2 * 24 * 60 * 60 * 1000,
                    effects: { resourceModifier: 1.5, combatExpModifier: 0.9 }
                },
                'solar_flare': {
                    name: 'Labareda Solar',
                    description: 'Energia solar intensa energiza metais.',
                    duration: 1 * 24 * 60 * 60 * 1000,
                    effects: { miningExpModifier: 1.4, fatigueModifier: 1.2 }
                },
                'desert_winds': {
                    name: 'Ventos do Deserto',
                    description: 'Ventos quentes carregam areia e calor.',
                    duration: 3 * 24 * 60 * 60 * 1000,
                    effects: { fatigueModifier: 1.3, combatExpModifier: 1.1 }
                },
                'fire_spirits': {
                    name: 'Espíritos de Fogo',
                    description: 'Espíritos ígneos vagam pela terra.',
                    duration: 2 * 24 * 60 * 60 * 1000,
                    effects: { damageReceivedModifier: 1.2, combatExpModifier: 1.3 }
                },
                'burning_skies': {
                    name: 'Céus Ardentes',
                    description: 'O céu parece estar em chamas.',
                    duration: 1 * 24 * 60 * 60 * 1000,
                    effects: { fatigueModifier: 1.4, nightRareChanceModifier: 1.3 }
                },
                'scorching_earth': {
                    name: 'Terra Escaldante',
                    description: 'O solo queima sob os pés.',
                    duration: 2 * 24 * 60 * 60 * 1000,
                    effects: { gatheringExpModifier: 0.8, miningExpModifier: 1.2 }
                },
                'falling_leaves': {
                    name: 'Queda das Folhas',
                    description: 'Folhas douradas caem como chuva.',
                    duration: 4 * 24 * 60 * 60 * 1000,
                    effects: { resourceModifier: 1.2, gatheringExpModifier: 1.1 }
                },
                'harvest_moon': {
                    name: 'Lua da Colheita',
                    description: 'A lua cheia ilumina os campos.',
                    duration: 1 * 24 * 60 * 60 * 1000,
                    effects: { nightRareChanceModifier: 1.5, globalExpModifier: 1.2 }
                },
                'amber_rain': {
                    name: 'Chuva Âmbar',
                    description: 'Chuva dourada beneficia alquimistas.',
                    duration: 2 * 24 * 60 * 60 * 1000,
                    effects: { gatheringExpModifier: 1.2, resourceModifier: 1.3 }
                },
                'golden_hour': {
                    name: 'Hora Dourada',
                    description: 'Luz dourada aumenta a percepção.',
                    duration: 3 * 24 * 60 * 60 * 1000,
                    effects: { globalExpModifier: 1.15, nightRareChanceModifier: 1.2 }
                },
                'twilight_mist': {
                    name: 'Névoa do Crepúsculo',
                    description: 'Névoa misteriosa cobre a terra.',
                    duration: 2 * 24 * 60 * 60 * 1000,
                    effects: { combatExpModifier: 1.2, damageReceivedModifier: 0.9 }
                },
                'aurora_borealis': {
                    name: 'Aurora Boreal',
                    description: 'Luzes dançantes no céu.',
                    duration: 1 * 24 * 60 * 60 * 1000,
                    effects: { globalExpModifier: 1.3, nightRareChanceModifier: 1.4 }
                },
                'frost_bite': {
                    name: 'Mordida do Gelo',
                    description: 'Frio cortante afeta movimentos.',
                    duration: 3 * 24 * 60 * 60 * 1000,
                    effects: { fatigueModifier: 1.3, combatExpModifier: 0.9 }
                },
                'crystal_formation': {
                    name: 'Formação Cristalina',
                    description: 'Cristais de gelo se formam por toda parte.',
                    duration: 2 * 24 * 60 * 60 * 1000,
                    effects: { miningExpModifier: 1.4, resourceModifier: 1.2 }
                },
                'blizzard_fury': {
                    name: 'Fúria da Nevasca',
                    description: 'Tempestade de neve intensa.',
                    duration: 2 * 24 * 60 * 60 * 1000,
                    effects: { fatigueModifier: 1.5, damageReceivedModifier: 1.2 }
                },
                'eternal_night': {
                    name: 'Noite Eterna',
                    description: 'A noite parece não ter fim.',
                    duration: 4 * 24 * 60 * 60 * 1000,
                    effects: { nightRareChanceModifier: 2.0, fatigueModifier: 1.2 }
                }
            };
            
            const eventData = seasonalEvents[randomEvent];
            if (eventData) {
                startGlobalEvent(eventData);
            }
        }
    }

    function focusOnLocation(poiId) {
        const poi = pointsOfInterest.find(p => p.id === poiId);
        if (!poi) return;

        // Calculate the position to center the POI
        const viewportWidth = mapArea.clientWidth;
        const viewportHeight = mapArea.clientHeight;

        // Convert POI percentage position to pixel position
        const poiPixelX = (poi.x / 100) * (viewportWidth * 5);
        const poiPixelY = (poi.y / 100) * (viewportHeight * 5);

        // Calculate offset to center the POI
        offsetX = (viewportWidth / 2) - (poiPixelX * scale);
        offsetY = (viewportHeight / 2) - (poiPixelY * scale);

        applyMapTransform();
        drawTravelArrow();

        // Highlight the POI temporarily
        const marker = document.getElementById(`poi-${poiId}`);
        if (marker) {
            marker.style.animation = 'pulse 2s ease-in-out 3';
            setTimeout(() => {
                marker.style.animation = '';
            }, 6000);
        }
    }

    // --- Active Events Display (E key) ---
    function showActiveEventsPanel() {
        const eventsModal = document.getElementById('active-events-modal');
        if (!eventsModal) {
            createActiveEventsPanel();
        } else {
            updateActiveEventsDisplay();
            showModal(eventsModal);
        }
    }

    function createActiveEventsPanel() {
        const modal = document.createElement('div');
        modal.id = 'active-events-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button" data-modal="active-events">&times;</span>
                <h2>Eventos Ativos</h2>
                <div id="active-events-list">
                    <!-- Events will be populated here -->
                </div>
                <div id="time-weather-info">
                    <h3>Condições Atuais</h3>
                    <p><strong>Hora:</strong> <span id="current-time-phase"></span></p>
                    <p><strong>Clima:</strong> <span id="current-weather"></span></p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add close button functionality
        modal.querySelector('.close-button').addEventListener('click', () => {
            hideModal(modal);
        });

        updateActiveEventsDisplay();
        showModal(modal);
    }

    function updateActiveEventsDisplay() {
        const eventsList = document.getElementById('active-events-list');
        const timePhase = document.getElementById('current-time-phase');
        const weather = document.getElementById('current-weather');

        // Update time and weather
        timePhase.textContent = gameTime.currentPhase === 'day' ? '☀️ Dia' : '🌙 Noite';
        weather.textContent = gameTime.weather === 'clear' ? '☀️ Tempo Limpo' : '🌧️ Chuva';

        // Update active events
        eventsList.innerHTML = '';

        if (activeEvent) {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'active-event-item';

            const timeRemaining = Math.max(0, (activeEvent.startTime + activeEvent.duration) - Date.now());

            eventDiv.innerHTML = `
                <h3>${activeEvent.name}</h3>
                <p class="event-description">${activeEvent.description}</p>
                <p class="event-time">Tempo restante: ${formatTime(timeRemaining)}</p>
                <div class="event-effects">
                    <h4>Efeitos:</h4>
                    <ul>
                        ${Object.entries(activeEvent.effects).map(([key, value]) => {
                            let effectName = key;
                            let effectValue = value;

                            // Translate effect names
                            const effectTranslations = {
                                'shopPriceModifier': 'Modificador de Preços',
                                'combatExpModifier': 'Modificador de EXP de Combate',
                                'damageReceivedModifier': 'Modificador de Dano Recebido',
                                'resourceModifier': 'Modificador de Recursos',
                                'gatheringExpModifier': 'Modificador de EXP de Coleta',
                                'statusEffectModifier': 'Modificador de Efeitos de Status',
                                'craftTimeModifier': 'Modificador de Tempo de Criação',
                                'globalExpModifier': 'Modificador Global de EXP',
                                'fishingResourceModifier': 'Modificador de Recursos de Pesca',
                                'fishingExpModifier': 'Modificador de EXP de Pesca',
                                'nightRareChanceModifier': 'Modificador de Itens Raros Noturnos',
                                'fatigueModifier': 'Modificador de Fadiga',
                                'miningExpModifier': 'Modificador de EXP de Mineração'
                            };

                            effectName = effectTranslations[key] || key;

                            // Format effect value
                            if (effectValue > 1) {
                                effectValue = `+${Math.floor((effectValue - 1) * 100)}%`;
                            } else if (effectValue < 1) {
                                effectValue = `-${Math.floor((1 - effectValue) * 100)}%`;
                            } else {
                                effectValue = '0%';
                            }

                            return `<li>${effectName}: ${effectValue}</li>`;
                        }).join('')}
                    </ul>
                </div>
            `;

            eventsList.appendChild(eventDiv);
        } else {
            eventsList.innerHTML = '<p class="no-events">Nenhum evento ativo no momento.</p>';
        }
    }

    // --- Update Log (U key) ---
    function showUpdateLog() {
        const updateModal = document.getElementById('update-log-modal');
        if (!updateModal) {
            createUpdateLogPanel();
        } else {
            showModal(updateModal);
        }
    }

    function createUpdateLogPanel() {
        const modal = document.createElement('div');
        modal.id = 'update-log-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button" data-modal="update-log">&times;</span>
                <h2>Log de Atualizações</h2>
                <div class="update-log-content">
                    <div class="update-version">
                        <h3>Versão 0.45 - Guildas Avançadas e Economia Mundial</h3>
                        <div class="update-date">Data: ${new Date().toLocaleDateString('pt-BR')}</div>
                        <div class="update-features">
                            <h4>🏰 Sistema de Guildas Avançado:</h4>
                            <ul>
                                <li><strong>Doações de Ouro:</strong> Membros podem doar ouro para elevar o nível da guilda</li>
                                <li><strong>10 Níveis de Guilda:</strong> Cada nível oferece bônus crescentes de EXP</li>
                                <li><strong>Bônus Poderosos:</strong> Até +50% EXP Global, Perícias e Coleta no nível máximo</li>
                                <li><strong>Lista de Guildas:</strong> Visualize todas as guildas do servidor com membros e níveis</li>
                                <li><strong>Sistema de Tesouro:</strong> Acompanhe doações e progresso da guilda</li>
                            </ul>
                            <h4>💰 Sistema de Economia Mundial:</h4>
                            <ul>
                                <li><strong>Aba Economia:</strong> Nova aba no painel (F) mostrando valores de moeda</li>
                                <li><strong>Capitais com Níveis:</strong> Capitais podem ser desenvolvidas por construtores</li>
                                <li><strong>Economia Regional:</strong> Afeta preços de lojas e custos para membros</li>
                                <li><strong>Sistema de Impostos:</strong> Líderes podem ajustar impostos regionais</li>
                                <li><strong>Cidades Lucrativas:</strong> Novo tipo de POI que gera ouro diário</li>
                            </ul>
                            <h4>🌍 Eventos Sazonais Expandidos:</h4>
                            <ul>
                                <li><strong>28 Eventos Únicos:</strong> 7 eventos por estação com efeitos diversos</li>
                                <li><strong>Eventos Especiais:</strong> Aurora Boreal, Tempestade de Pólen, Lua da Colheita</li>
                                <li><strong>Efeitos Variados:</strong> Modificadores de EXP, recursos, fadiga e raridade</li>
                                <li><strong>Duração Dinâmica:</strong> Eventos duram de 1 a 5 dias</li>
                            </ul>
                            <h4>⏰ Sistema de Tempo Aprimorado:</h4>
                            <ul>
                                <li><strong>Horário do Jogo:</strong> Relógio em tempo real no display mundial</li>
                                <li><strong>Ciclo Realista:</strong> 24 horas do jogo = 6 horas reais</li>
                                <li><strong>Dia/Noite Dinâmico:</strong> Baseado no horário do jogo (6h-18h = dia)</li>
                                <li><strong>Sistema Preciso:</strong> 4 minutos do jogo por segundo real</li>
                            </ul>
                            <h4>⚔️ Combate e Monstros Evoluídos:</h4>
                            <ul>
                                <li><strong>Níveis de Monstros:</strong> Inimigos aparecem com níveis aleatórios</li>
                                <li><strong>Scaling Dinâmico:</strong> Nível 3 = +35% de status para o monstro</li>
                                <li><strong>EXP Escalonado:</strong> Baseado na vida/dano do monstro e nível da área</li>
                                <li><strong>Mais Recompensas:</strong> Monstros mais fortes dão mais experiência</li>
                            </ul>
                            <h4>🛠️ Interface e Usabilidade:</h4>
                            <ul>
                                <li><strong>Entry UI Melhorada:</strong> Locais mostram opções de farm na primeira tela</li>
                                <li><strong>Detalhes de Guilda:</strong> Clique em guildas para ver todos os membros</li>
                                <li><strong>Bônus Visuais:</strong> Display claro dos bônus ativos da guilda</li>
                                <li><strong>Economia Regional:</strong> Informações detalhadas de cada capital</li>
                            </ul>
                        </div>
                    </div>
                    <div class="update-version">
                        <h3>Versão 0.40 - Sistema de Profissões e Estações</h3>
                        <div class="update-date">Data: ${new Date().toLocaleDateString('pt-BR')}</div>
                        <div class="update-features">
                            <h4>🏭 Sistema de Profissões:</h4>
                            <ul>
                                <li><strong>5 Profissões Disponíveis:</strong> Lenhador, Construtor, Ferreiro, Alquimista, Mineiro</li>
                                <li><strong>Desbloqueio:</strong> Alcance nível 2 em qualquer perícia de coleta</li>
                                <li><strong>Bônus Significativos:</strong> Até 120% de bônus de coleta na especialidade</li>
                                <li><strong>Escolha Permanente:</strong> Defina sua especialização para sempre</li>
                                <li><strong>Restrições de Criação:</strong> Ferreiros criam armas raras, Alquimistas fazem poções</li>
                            </ul>
                            <h4>🌍 Sistema de Estações:</h4>
                            <ul>
                                <li><strong>Ciclo Realista:</strong> Estações mudam a cada 7 dias reais</li>
                                <li><strong>4 Estações:</strong> Primavera, Verão, Outono, Inverno</li>
                                <li><strong>Eventos Sazonais:</strong> Cada estação traz eventos únicos</li>
                                <li><strong>Contador de Dias:</strong> Acompanhe os dias desde a criação do mundo</li>
                                <li><strong>Efeitos Climáticos:</strong> Estações afetam coleta, combate e eventos</li>
                            </ul>
                            <h4>🏰 Melhorias no Sistema de Guildas:</h4>
                            <ul>
                                <li><strong>Aba Dedicada:</strong> Nova aba no painel de informações (F)</li>
                                <li><strong>Interface Completa:</strong> Criar, entrar e gerenciar guildas</li>
                                <li><strong>Lista de Membros:</strong> Visualize todos os membros e o líder</li>
                                <li><strong>Sistema de Liderança:</strong> Transferência automática de liderança</li>
                            </ul>
                            <h4>📊 Melhorias na Interface:</h4>
                            <ul>
                                <li><strong>Status do Mundo:</strong> Display permanente de dia, estação, clima e período</li>
                                <li><strong>Profissão no Status:</strong> Visualize sua profissão no painel de status</li>
                                <li><strong>Abas Funcionais:</strong> Sistema de abas no painel de informações</li>
                            </ul>
                            <h4>⚡ Sistema de Perícias Expandido:</h4>
                            <ul>
                                <li><strong>5 Perícias de Coleta:</strong> Corte de Madeira, Mineração, Pesca, Ferraria, Alquimia</li>
                                <li><strong>Progressão Detalhada:</strong> 15 níveis com bônus únicos</li>
                                <li><strong>Experiência Balanceada:</strong> Curva de experiência progressiva</li>
                                <li><strong>Bônus de Profissão:</strong> Multiplicadores baseados na especialização</li>
                            </ul>
                        </div>
                    </div>
                    <div class="update-version">
                        <h3>Versão 0.35 - Expansão Massiva do Mundo</h3>
                        <div class="update-date">Data: ${new Date().toLocaleDateString('pt-BR')}</div>
                        <div class="update-features">
                            <h4>🌍 Novidades Principais:</h4>
                            <ul>
                                <li><strong>Mapa Expandido:</strong> 5 castelos, 15+ campos de caça, 12+ montanhas, 10+ florestas</li>
                                <li><strong>Novo POI - Lagos:</strong> 4+ lagos para pesca passiva</li>
                                <li><strong>Sistema de Pesca:</strong> Nova perícia de pesca com mecânicas únicas</li>
                                <li><strong>Ciclo Dia/Noite:</strong> Ciclo de 2h40min afetando eventos e pesca</li>
                                <li><strong>Sistema de Clima:</strong> Chuva e tempo limpo influenciam gameplay</li>
                                <li><strong>3 Capitais:</strong> Grandes cidades que requerem 12 horas para conquista</li>
                                <li><strong>Sistema de Guildas:</strong> Criação e gerenciamento de guildas</li>
                                <li><strong>Conquista de Territórios:</strong> Jogadores podem conquistar localizações</li>
                                <li><strong>Indicadores Visuais:</strong> Círculos azuis (castelos) e vermelhos (capitais)</li>
                                <li><strong>Painel de Informações (F):</strong> Visualização organizada de localizações</li>
                                <li><strong>Eventos Ativos (E):</strong> Display detalhado de eventos em andamento</li>
                                <li><strong>Preços Dinâmicos:</strong> Modificadores visuais de preços nas lojas</li>
                            </ul>
                            <h4>🎣 Sistema de Pesca:</h4>
                            <ul>
                                <li>Perícia de pesca com bônus únicos</li>
                                <li>Influência do clima e hora do dia</li>
                                <li>Novos peixes e materiais aquáticos</li>
                                <li>Varas de pesca especializadas</li>
                            </ul>
                            <h4>🏰 Sistema de Territórios:</h4>
                            <ul>
                                <li>Limite de 2 localizações por jogador solo</li>
                                <li>Limite de 10 localizações por guilda (capitais = 3)</li>
                                <li>Renda automática a cada 24 horas</li>
                                <li>Controle territorial visual no mapa</li>
                            </ul>
                            <h4>⚔️ Melhorias de Combate:</h4>
                            <ul>
                                <li>15+ novos monstros</li>
                                <li>Áreas específicas com criaturas únicas</li>
                                <li>Eventos que afetam dificuldade e recompensas</li>
                            </ul>
                            <h4>🛠️ Itens e Criação:</h4>
                            <ul>
                                <li>50+ novos itens e materiais</li>
                                <li>Receitas de pesca e equipamentos aquáticos</li>
                                <li>Materiais raros de diferentes biomas</li>
                                <li>Ferramentas especializadas por atividade</li>
                            </ul>
                            <h4>🎮 Interface e Usabilidade:</h4>
                            <ul>
                                <li>Correção do botão X para fechar abas</li>
                                <li>Painel de informações expansível (F)</li>
                                <li>Display de eventos ativos (E)</li>
                                <li>Foco automático em localizações</li>
                                <li>Indicadores visuais de preços</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add close button functionality
        modal.querySelector('.close-button').addEventListener('click', () => {
            hideModal(modal);
        });

        showModal(modal);
    }

    // --- Event Listeners ---
    startGameButton.addEventListener('click', startGame);
    playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            startGame();
        }
    });

    classOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectClass(option.dataset.class);
        });
    });

    selectClassButton.addEventListener('click', confirmClassSelection);
    cancelClassButton.addEventListener('click', () => hideModal(classModal));
    chooseClassButton.addEventListener('click', showClassSelection);

    // Profession modal listeners
    selectProfessionButton.addEventListener('click', () => {
        const professionKey = selectProfessionButton.dataset.profession;
        if (professionKey) {
            selectProfession(professionKey);
        }
    });
    cancelProfessionButton.addEventListener('click', () => hideModal(professionModal));

    closeEventBanner.addEventListener('click', () => {
        globalEventsBanner.classList.add('hidden');
    });

    attackButton.addEventListener('click', playerAttack);
    fleeButton.addEventListener('click', fleeBattle);
    resetButton.addEventListener('click', resetGame);
    stopGatheringButton.addEventListener('click', stopActiveGathering);

    // Castle conquest buttons
    startConquestButton.addEventListener('click', () => {
        const castle = pointsOfInterest.find(p => p.id === player.currentLocationId);
        if (castle) {
            startCastleConquest(castle);
        }
    });
    stopConquestButton.addEventListener('click', stopCastleConquest);
    leaveCastleButton.addEventListener('click', leaveCastle);

    // Location modal buttons
    travelToLocationButton.addEventListener('click', () => {
        const clickedPoi = pointsOfInterest.find(p => p.id === selectedLocationId);
        const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
        if (clickedPoi && currentPoi) {
            hideModal(locationModal);
            startTravel(currentPoi, clickedPoi);
        }
    });

    enterLocationButton.addEventListener('click', () => {
        const clickedPoi = pointsOfInterest.find(p => p.id === selectedLocationId);
        hideModal(locationModal);

        if (clickedPoi.type.startsWith('shop') || clickedPoi.type === 'settlement') {
            openShopModal();
        } else if (clickedPoi.type === 'forest' || clickedPoi.type === 'mountain' || clickedPoi.type === 'lake' || clickedPoi.type === 'hunting-ground' || clickedPoi.type === 'cave') {
            openPassiveFarmModal(clickedPoi);
        } else if (clickedPoi.type === 'castle' || clickedPoi.type === 'capital') {
            showSection('castle-conquest-area');
            castleNameEl.textContent = clickedPoi.name;
            castleOwnerEl.textContent = clickedPoi.owner || 'Nenhum';
            conquestProgressEl.textContent = '0';
            conquestTimeEl.textContent = '--';
            castleLogEl.innerHTML = '';

            if (clickedPoi.owner === player.name || (player.guild && clickedPoi.owner === guilds[player.guild].name)) {
                addCastleLog(`Bem-vindo ao seu ${clickedPoi.type === 'capital' ? 'capital' : 'castelo'}, ${clickedPoi.name}!`, 'log-success');
                startConquestButton.classList.add('hidden');
            } else if (clickedPoi.owner) {
                addCastleLog(`Este ${clickedPoi.type === 'capital' ? 'capital' : 'castelo'} pertence a ${clickedPoi.owner}.`, 'log-info');
                const conquestTime = clickedPoi.type === 'capital' ? '12 horas' : '1 hora';
                addCastleLog(`Você pode tentar conquistá-lo, mas isso levará ${conquestTime}.`, 'log-warning');
                startConquestButton.classList.remove('hidden');
            } else {
                addCastleLog(`Este ${clickedPoi.type === 'capital' ? 'capital' : 'castelo'} está abandonado. Você pode conquistá-lo!`, 'log-info');
                startConquestButton.classList.remove('hidden');
            }

            stopConquestButton.classList.add('hidden');
        }
    });

    activeHuntButton.addEventListener('click', () => {
        const clickedPoi = pointsOfInterest.find(p => p.id === selectedLocationId);
        hideModal(locationModal);

        if (clickedPoi) {
            const minLevel = clickedPoi.levelRange[0];
            const maxLevel = clickedPoi.levelRange[1];
            const monsterLevel = getRandomInt(minLevel, maxLevel);
            currentPoiLevel = monsterLevel;
            spawnRandomMonster(monsterLevel, clickedPoi.id);
        }
    });

    passiveHuntButton.addEventListener('click', () => {
        const clickedPoi = pointsOfInterest.find(p => p.id === selectedLocationId);
        hideModal(locationModal);

        if (clickedPoi) {
            openPassiveFarmModal(clickedPoi);
        }
    });

    activeGatherButton.addEventListener('click', () => {
        const clickedPoi = pointsOfInterest.find(p => p.id === selectedLocationId);
        hideModal(locationModal);

        if (clickedPoi) {
            startActiveGathering(clickedPoi);
        }
    });

    castleInfoButton.addEventListener('click', () => {
        const clickedPoi = pointsOfInterest.find(p => p.id === selectedLocationId);
        hideModal(locationModal);

        if (clickedPoi) {
            showSection('castle-conquest-area');
            castleNameEl.textContent = clickedPoi.name;
            castleOwnerEl.textContent = clickedPoi.owner || 'Nenhum';
            conquestProgressEl.textContent = '0';
            conquestTimeEl.textContent = '--';
            castleLogEl.innerHTML = '';

            if (clickedPoi.owner === player.name || (player.guild && clickedPoi.owner === guilds[player.guild].name)) {
                addCastleLog(`Bem-vindo ao seu ${clickedPoi.type === 'capital' ? 'capital' : 'castelo'}, ${clickedPoi.name}!`, 'log-success');
                startConquestButton.classList.add('hidden');
            } else if (clickedPoi.owner) {
                addCastleLog(`Este ${clickedPoi.type === 'capital' ? 'capital' : 'castelo'} pertence a ${clickedPoi.owner}.`, 'log-info');
                const conquestTime = clickedPoi.type === 'capital' ? '12 horas' : '1 hora';
                addCastleLog(`Você pode tentar conquistá-lo, mas isso levará ${conquestTime}.`, 'log-warning');
                startConquestButton.classList.remove('hidden');
            } else {
                addCastleLog(`Este ${clickedPoi.type === 'capital' ? 'capital' : 'castelo'} está abandonado. Você pode conquistá-lo!`, 'log-info');
                startConquestButton.classList.remove('hidden');
            }

            stopConquestButton.classList.add('hidden');
        }
    });

    cancelLocationButton.addEventListener('click', () => {
        hideModal(locationModal);
    });

    // Crafting buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateCraftingDisplay(e.target.dataset.category);
        });
    });

    craftItemButton.addEventListener('click', craftItem);

    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modalToClose = e.target.dataset.modal;
            if (modalToClose === 'stats') hideModal(statsModal);
            else if (modalToClose === 'inventory') hideModal(inventoryModal);
            else if (modalToClose === 'shop') hideModal(shopModal);
            else if (modalToClose === 'crafting') hideModal(craftingModal);
            else if (modalToClose === 'location') hideModal(locationModal);
            else if (modalToClose === 'passive-farm') {
                if (!player.isPassiveFarming) {
                    hideModal(passiveFarmModal);
                }
            }
            else if (modalToClose === 'info-panel') hideModal(document.getElementById('info-panel-modal'));
            else if (modalToClose === 'active-events') hideModal(document.getElementById('active-events-modal'));
            else if (modalToClose === 'update-log') hideModal(document.getElementById('update-log-modal'));
            hideItemDetails();
        });
    });

    addAttributeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const attribute = e.target.dataset.attribute;
            if (player.skillPoints > 0) {
                player[attribute]++;
                player.skillPoints--;
                addBattleLog(`Sua ${attribute} aumentou!`, 'log-info');
                updateCalculatedStats();
                updatePlayerStatsDisplay();
            } else {
                addBattleLog('Você não tem pontos de habilidade disponíveis.', 'log-warning');
            }
        });
    });

    useItemButton.addEventListener('click', () => {
        const quantity = parseInt(actionQuantityInput.value);
        if (player.selectedInventoryItem && quantity > 0 && quantity <= player.selectedInventoryItem.quantity) {
            useItem(player.selectedInventoryItem, quantity);
        } else {
            addBattleLog('Quantidade inválida para usar item.', 'log-error');
        }
    });

    equipItemButton.addEventListener('click', () => {
        if (player.selectedInventoryItem) {
            equipItem(player.selectedInventoryItem);
        }
    });

    discardItemButton.addEventListener('click', () => {
        const quantity = parseInt(actionQuantityInput.value);
        if (player.selectedInventoryItem && quantity > 0 && quantity <= player.selectedInventoryItem.quantity) {
            discardItem(player.selectedInventoryItem, quantity);
        } else {
            addBattleLog('Quantidade inválida para descartar item.', 'log-error');
        }
    });

    cancelItemActionButton.addEventListener('click', hideItemDetails);

    restButton.addEventListener('click', () => {
        if (player.gold >= player.restCost && player.fatigue > 0) {
            player.gold -= player.restCost;
            player.fatigue = Math.max(0, player.fatigue - player.restFatigueReduction);
            player.hp = player.maxHp;
            addBattleLog(`Você descansou e recuperou HP e reduziu fadiga em ${player.restFatigueReduction}!`, 'log-success');
            updatePlayerStatsDisplay();
        } else if (player.fatigue === 0) {
            addBattleLog('Você não está cansado.', 'log-info');
        } else {
            addBattleLog('Você não tem ouro suficiente para descansar.', 'log-error');
        }
    });

    startPassiveFarmButton.addEventListener('click', startPassiveFarm);
    stopPassiveFarmButton.addEventListener('click', () => stopPassiveFarm());
    closePassiveFarmButton.addEventListener('click', () => {
        if (!player.isPassiveFarming) {
            hideModal(passiveFarmModal);
        }
    });

    document.body.addEventListener('keydown', (e) => {
        if (e.key === 's' || e.key === 'S') {
            if (statsModal.classList.contains('hidden')) {
                updatePlayerStatsDisplay();
                showModal(statsModal);
            } else {
                hideModal(statsModal);
            }
        } else if (e.key === 'i' || e.key === 'I') {
            if (inventoryModal.classList.contains('hidden')) {
                updateInventoryDisplay();
                showModal(inventoryModal);
            } else {
                hideModal(inventoryModal);
            }
        } else if (e.key === 'c' || e.key === 'C') {
            if (craftingModal.classList.contains('hidden')) {
                updateCraftingDisplay();
                showModal(craftingModal);
            } else {
                hideModal(craftingModal);
            }
        } else if (e.key === 'l' || e.key === 'L') {
            const currentPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
            if (currentPoi && (currentPoi.type.startsWith('shop') || currentPoi.type === 'settlement')) {
                openShopModal();
            } else {
                addBattleLog('Você precisa estar em um vilarejo ou loja.', 'log-warning');
            }
        } else if (e.key === 'f' || e.key === 'F') {
            showInformationPanel();
        } else if (e.key === 'e' || e.key === 'E') {
            showActiveEventsPanel();
        } else if (e.key === 'u' || e.key === 'U') {
            showUpdateLog();
        } else if (e.key === 't' || e.key === 'T') {
            // Test gathering system - simulate collecting wood
            simulateGatheringActivity('Madeira Comum', 1);
            addBattleLog('Teste: Coletou 1 Madeira Comum! (Pressione T para testar novamente)', 'log-info');
        }
    });

    function openShopModal() {
        if (shopModal.classList.contains('hidden')) {
            updatePlayerStatsDisplay();
            updateShopDisplay();
            showModal(shopModal);
        } else {
            hideModal(shopModal);
        }
    }

    // --- Game Time System ---
    function startGameTimeInterval() {
        // Update world time every minute
        setInterval(() => {
            updateWorldTime();
        }, 60 * 1000);
        
        // Initial update
        updateWorldTime();
    }

    // --- Helper Functions for Integration ---
    function simulateGatheringActivity(resourceType, amount = 1) {
        // This function can be called when resources are collected to add gathering experience
        let skillName = 'woodcutting'; // default
        
        // Map resource types to skills
        if (resourceType.toLowerCase().includes('madeira') || resourceType.toLowerCase().includes('wood')) {
            skillName = 'woodcutting';
        } else if (resourceType.toLowerCase().includes('minério') || resourceType.toLowerCase().includes('metal') || resourceType.toLowerCase().includes('ferro')) {
            skillName = 'mining';
        } else if (resourceType.toLowerCase().includes('peixe') || resourceType.toLowerCase().includes('fish')) {
            skillName = 'fishing';
        }
        
        // Add experience based on amount and profession bonus
        const baseExp = amount * 10;
        const professionBonus = getGatheringBonus(skillName);
        const guildBonus = getGuildGatheringBonus();
        const finalExp = Math.floor(baseExp * professionBonus * guildBonus);
        
        addGatheringExp(skillName, finalExp);
        
        // Show experience gain message
        if (bonus > 1.0) {
            const bonusPercent = Math.floor((bonus - 1) * 100);
            addBattleLog(`+${finalExp} EXP em ${GATHERING_SKILLS_CONFIG[skillName].name} (+${bonusPercent}% bônus profissional!)`, 'log-success');
        } else {
            addBattleLog(`+${finalExp} EXP em ${GATHERING_SKILLS_CONFIG[skillName].name}`, 'log-info');
        }
    }

    // --- Game Initialization ---
    function initializeGame() {
        const initialPoi = pointsOfInterest.find(p => p.id === player.currentLocationId);
        if (initialPoi) {
            addBattleLog(`${player.name} começa sua jornada em ${initialPoi.name}.`, 'log-info');
        } else {
            addBattleLog('Erro: Ponto de início não encontrado.', 'log-error');
            player.currentLocationId = pointsOfInterest[0].id;
        }

        pointsOfInterest.forEach(poi => {
            if (poi.initialStock && !poi.stock.initialized) {
                poi.stock = { ...poi.initialStock };
                poi.lastRestockTime = Date.now();
                poi.stock.initialized = true;
            }
        });

        resizeCanvas();
        initializePoiMarkers();
        updatePlayerStatsDisplay();
        updateInventoryDisplay();
        updateCalculatedStats();
        updateMapVisuals();

        // Initial items
        addItemToInventory('Poção de Cura Menor', 3);
        addItemToInventory('Espada Curta', 1);
        addItemToInventory('Armadura de Couro', 1);
        addItemToInventory('Rações de Viagem', 5);
        addItemToInventory('Flechas (10)', 2);
        addItemToInventory('Antídoto', 1);
        addItemToInventory('Bandagem', 2);
        addItemToInventory('Picareta de Ferro', 1);
        addItemToInventory('Machado de Lenhador', 1);
        addItemToInventory('Vara de Pesca Simples', 1);
        addItemToInventory('Mochila Simples', 1);

        player.gold = 50;
        
        // Initialize some basic gathering skills for testing
        player.gatheringSkills = {
            'woodcutting': { level: 1, exp: 50 },
            'mining': { level: 1, exp: 30 },
            'fishing': { level: 1, exp: 20 }
        };
        
        updatePlayerStatsDisplay();
        updateInventoryDisplay();

        startGameTimeInterval();
    }

    // Start the game with name modal
    showModal(nameModal);
    playerNameInput.focus();
    window.addEventListener('resize', resizeCanvas);
});
