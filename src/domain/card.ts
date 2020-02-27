export interface Card {

    // Core Card Fields
    arena_id?: number;
    id: string;
    lang: string;
    mtgo_id?: number;
    mtgo_foil_id?: number;
    multiverse_ids?: number[]; // TODO: maybe sanitize to not deal with null array
    tcgplayer_id?: number;
    object: 'card';
    oracle_id: string;
    prints_search_uri: string;
    rulings_uri: string;
    scryfall_uri: string;
    uri: string;

    // Game play Fields
    all_parts?: RelatedCardObjects[];
    card_faces?: CardFace[];
    cmc: number;
    colors?: Colors[];
    color_identity: Colors[];
    color_indicator?: Colors[];
    edhrec_rank?: number;
    foil: boolean;
    hand_modifier?: string;
    layout: Layout;
    legalities: {
        standard: Legality,
        future: Legality,
        historic: Legality,
        pioneer: Legality,
        modern: Legality,
        legacy: Legality,
        pauper: Legality,
        vintage: Legality,
        penny: Legality,
        commander: Legality,
        brawl: Legality,
        duel: Legality,
        oldschool: Legality;
    };
    life_modifier?: string;
    loyalty?: string;
    mana_cost?: string;
    name: string;
    nonfoil: boolean;
    oracle_text?: string;
    oversized: boolean;
    power?: string;
    reserved: boolean;
    toughness?: string;
    type_line: string;

    // Print Fields
    artist?: string;
    artist_ids?: string[];
    booster: boolean;
    border_color: BorderColor;
    card_back_id: string;
    collector_number: string;
    digital: boolean;
    flavor_text?: string;
    frame_effects?: FrameEffect[];
    frame: Frame;
    full_art: boolean;
    games: Games[];
    highres_image: boolean;
    illustration_id?: string;
    image_uris?: ImageUris;
    prices: { // TODO: why not num??
        usd?: string,
        usd_foil?: string,
        eur?: string,
        tix?: string;
    };
    printed_name?: string;
    printed_text?: string;
    printed_type_line?: string;
    promo: boolean;
    promo_types?: string[]; // TODO: Can this be enumified?
    purchase_uris: {
        tcgplayer: string,
        cardmarket: string,
        cardhoarder: string;
    };
    rarity: Rarity;
    related_uris: {
        gatherer?: string,
        tcgplayer_decks?: string,
        edhrec?: string,
        mtgtop8?: string;
    };
    released_at: Date;
    reprint: boolean;
    scryfall_set_uri: string;
    set_name: string;
    set_search_uri: string;
    set_type: string; // TODO: Can this be enumified?
    set_uri: string;
    set: string;
    story_spotlight: boolean;
    textless: boolean;
    variation: boolean;
    variation_of?: string;
    watermark?: string;
    preview: { // TODO: Is this supposed to be nested?
        previewed_at?: Date,
        source_uri?: string,
        source?: string;
    };
}

export interface RelatedCardObjects {
    id: string;
    object: 'related_card';
    component: ComponentRole;
    name: string;
    type_line: string;
    uri: string;
}

export interface CardFace {
    artist?: string;
    color_indicator?: Colors[];
    colors?: Colors[];
    flavor_text?: string;
    illustration_id?: string;
    image_uris?: ImageUris;
    loyalty?: string;
    mana_cost: string;
    name: string;
    object: 'card_face';
    oracle_text?: string;
    power?: string;
    printed_name?: string;
    printed_text?: string;
    printed_type_line?: string;
    toughness?: string;
    type_line: string;
    watermark?: string;
}

export interface ImageUris {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
}

export enum ComponentRole {
    Token = 'token',
    MeldPart = 'meld_part',
    MeldResult = 'meld_result',
    ComboPiece = 'combo_piece'
}

export enum Colors {
    White = 'W',
    Blue = 'U',
    Black = 'B',
    Red = 'R',
    Green = 'G'
}

export enum Games {
    Mtgo = 'mtgo',
    Paper = 'paper',
    Arena = 'arena'
}

export enum Rarity {
    Common = 'common',
    Uncommon = 'uncommon',
    Rare = 'rare',
    Mythic = 'mythic'
}

export enum Legality {
    Legal = 'legal',
    NotLegal = 'not_legal',
    Restricted = 'restricted',
    Banned = 'banned'
}

export enum BorderColor {
    Black = 'black',
    Borderless = 'borderless',
    Gold = 'gold',
    Silver = 'silver',
    White = 'white'
}

export enum Layout {
    Normal = 'normal',
    Split = 'split',
    Flip = 'flip',
    Transform = 'transform',
    Meld = 'meld',
    Leveler = 'leveler',
    Saga = 'saga',
    Adventure = 'adventure',
    Planar = 'planar',
    Scheme = 'scheme',
    Vanguard = 'vanguard',
    Token = 'token',
    DoubleFacedToken = 'double_faced_token',
    Emblem = 'emblem',
    Augment = 'augment',
    Host = 'host',
    ArtSeries = 'art_series',
    DoubleSided = 'double_sided'
}

export enum FrameEffect {
    Legendary = 'legendary',
    Miracle = 'miracle',
    NyxTouched = 'nyxtouched',
    Draft = 'draft',
    Devoid = 'devoid',
    Tombstone = 'tombstone',
    ColorShifted = 'colorshifted',
    Inverted = 'inverted',
    SunMoonDFC = 'sunmoondfc',
    CompassLandDFC = 'compasslanddfc',
    OriginPWDFC = 'originpwdfc',
    MoonEldraziDFC = 'mooneldrazidfc',
    MoonReverseMoonDFC = 'moonreversemoondfc',
    Showcase = 'showcase',
    ExtendedArt = 'extendedart'
}

export enum Frame {
    NineteenNinetyThree = '1993',
    NineteenNinetySeven = '1997',
    TwoThousandThree = '2003',
    TwentyFifteen = '2015',
    Future = 'future'
}
