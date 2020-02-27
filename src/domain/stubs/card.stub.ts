/* tslint:disable:variable-name no-unnecessary-initializer */
import { Card, RelatedCardObjects, CardFace, Colors, Layout, Legality, BorderColor, FrameEffect, Frame, Games, Rarity } from '../card';

export class CardStub implements Card {
    arena_id?: number;
    id: string;
    lang: string;
    mtgo_id?: number;
    mtgo_foil_id?: number;
    multiverse_ids?: number[];
    tcgplayer_id?: number;
    object: 'card';
    oracle_id: string;
    prints_search_uri: string;
    rulings_uri: string;
    scryfall_uri: string;
    uri: string;
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
    image_uris?: {
        small: string,
        normal: string,
        large: string,
        png: string,
        art_crop: string,
        border_crop: string;
    };
    prices: {
        usd?: string,
        usd_foil?: string,
        eur?: string,
        tix?: string;
    };
    printed_name?: string;
    printed_text?: string;
    printed_type_line?: string;
    promo: boolean;
    promo_types?: string[];
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
    set_type: string;
    set_uri: string;
    set: string;
    story_spotlight: boolean;
    textless: boolean;
    variation: boolean;
    variation_of?: string;
    watermark?: string;
    preview: {
        previewed_at?: Date,
        source_uri?: string,
        source?: string;
    };

    constructor({
                    arena_id = undefined,
                    id = 'b1e50811-048f-4dc6-a453-a5e36f3eb0a0',
                    lang = 'en',
                    mtgo_id = undefined,
                    mtgo_foil_id = undefined,
                    multiverse_ids = [],
                    tcgplayer_id = 100182,
                    oracle_id = 'e206842f-139b-490d-bc10-d365705ac720',
                    prints_search_uri = 'https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae206842f-139b-490d-bc10-d365705ac720&unique=prints',
                    rulings_uri = 'https://api.scryfall.com/cards/b1e50811-048f-4dc6-a453-a5e36f3eb0a0/rulings',
                    scryfall_uri = 'https://scryfall.com/card/cp3/2/seeker-of-the-way?utm_source=api',
                    uri = 'https://api.scryfall.com/cards/b1e50811-048f-4dc6-a453-a5e36f3eb0a0',
                    all_parts = undefined,
                    card_faces = undefined,
                    cmc = 2,
                    colors = [ Colors.White ],
                    color_identity = [ Colors.White ],
                    color_indicator = undefined,
                    edhrec_rank = 8873,
                    foil = true,
                    hand_modifier = undefined,
                    layout = Layout.Normal,
                    legalities = {
                        standard: Legality.NotLegal,
                        future: Legality.NotLegal,
                        historic: Legality.NotLegal,
                        pioneer: Legality.Legal,
                        modern: Legality.Legal,
                        legacy: Legality.Legal,
                        pauper: Legality.Legal,
                        vintage: Legality.Legal,
                        penny: Legality.NotLegal,
                        commander: Legality.Legal,
                        brawl: Legality.NotLegal,
                        duel: Legality.Legal,
                        oldschool: Legality.NotLegal
                    },
                    life_modifier = undefined,
                    loyalty = undefined,
                    mana_cost = '{1}{W}',
                    name = 'Seeker of the Way',
                    nonfoil = false,
                    oracle_text = 'Prowess (Whenever you cast a noncreature spell, this creature gets +1/+1 until end of turn.)↵Whenever you cast a noncreature spell, Seeker of the Way gains lifelink until end of turn.',
                    oversized = false,
                    power = '2',
                    reserved = false,
                    toughness = '2',
                    type_line = 'Creature — Human Warrior',
                    artist = 'Magali Villeneuve',
                    artist_ids = [ '9e6a55ae-be4d-4c23-a2a5-135737ffd879' ],
                    booster = false,
                    border_color = BorderColor.Black,
                    card_back_id = '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
                    collector_number = '2',
                    digital = false,
                    flavor_text = `"I don't know where my destiny lies, but I know it isn't here."`,
                    frame_effects = undefined,
                    frame = Frame.TwentyFifteen,
                    full_art = false,
                    games = [ Games.Paper ],
                    highres_image = true,
                    illustration_id = '20b4b302-ed1a-4bad-95f0-895b9dda0fa6',
                    image_uris = {
                        small: 'https://img.scryfall.com/cards/small/front/b/1/b1e50811-048f-4dc6-a453-a5e36f3eb0a0.jpg?1561757837',
                        normal: 'https://img.scryfall.com/cards/normal/front/b/1/b1e50811-048f-4dc6-a453-a5e36f3eb0a0.jpg?1561757837',
                        large: 'https://img.scryfall.com/cards/large/front/b/1/b1e50811-048f-4dc6-a453-a5e36f3eb0a0.jpg?1561757837',
                        png: 'https://img.scryfall.com/cards/png/front/b/1/b1e50811-048f-4dc6-a453-a5e36f3eb0a0.png?1561757837',
                        art_crop: 'https://img.scryfall.com/cards/art_crop/front/b/1/b1e50811-048f-4dc6-a453-a5e36f3eb0a0.jpg?1561757837',
                        border_crop: 'https://img.scryfall.com/cards/border_crop/front/b/1/b1e50811-048f-4dc6-a453-a5e36f3eb0a0.jpg?1561757837'
                    },
                    prices = {
                        usd: undefined,
                        usd_foil: '0.53',
                        eur: undefined,
                        tix: undefined
                    },
                    printed_name = undefined,
                    printed_text = undefined,
                    printed_type_line = undefined,
                    promo = false,
                    promo_types = undefined,
                    purchase_uris = {
                        tcgplayer: 'https://shop.tcgplayer.com/product/productsearch?id=100182&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
                        cardmarket: 'https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Seeker+of+the+Way&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall',
                        cardhoarder: 'https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Seeker+of+the+Way&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall'
                    },
                    rarity = Rarity.Uncommon,
                    related_uris = {
                        gatherer: undefined,
                        tcgplayer_decks: 'https://decks.tcgplayer.com/magic/deck/search?contains=Seeker+of+the+Way&page=1&partner=Scryfall&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall',
                        edhrec: 'https://edhrec.com/route/?cc=Seeker+of+the+Way',
                        mtgtop8: 'https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Seeker+of+the+Way'
                    },
                    released_at = new Date('2015-07-17'),
                    reprint = true,
                    scryfall_set_uri = 'https://scryfall.com/sets/cp3?utm_source=api',
                    set_name = 'Magic Origins Clash Pack',
                    set_search_uri = 'https://api.scryfall.com/cards/search?order=set&q=e%3Acp3&unique=prints',
                    set_type = 'starter',
                    set_uri = 'https://api.scryfall.com/sets/e6177218-1e8b-488e-8a4c-ef3af130b600',
                    set = 'cp3',
                    story_spotlight = false,
                    textless = false,
                    variation = false,
                    variation_of = undefined,
                    watermark = undefined,
                    preview = {
                        previewed_at: undefined,
                        source_uri: undefined,
                        source: undefined
                    }
                }) {
        this.arena_id = arena_id;
        this.id = id;
        this.lang = lang;
        this.mtgo_id = mtgo_id;
        this.mtgo_foil_id = mtgo_foil_id;
        this.multiverse_ids = multiverse_ids;
        this.tcgplayer_id = tcgplayer_id;
        this.oracle_id = oracle_id;
        this.prints_search_uri = prints_search_uri;
        this.rulings_uri = rulings_uri;
        this.scryfall_uri = scryfall_uri;
        this.uri = uri;
        this.all_parts = all_parts;
        this.card_faces = card_faces;
        this.cmc = cmc;
        this.colors = colors;
        this.color_identity = color_identity;
        this.color_indicator = color_indicator;
        this.edhrec_rank = edhrec_rank;
        this.foil = foil;
        this.hand_modifier = hand_modifier;
        this.layout = layout;
        this.legalities = legalities;
        this.life_modifier = life_modifier;
        this.loyalty = loyalty;
        this.mana_cost = mana_cost;
        this.name = name;
        this.nonfoil = nonfoil;
        this.oracle_text = oracle_text;
        this.oversized = oversized;
        this.power = power;
        this.reserved = reserved;
        this.toughness = toughness;
        this.type_line = type_line;
        this.artist = artist;
        this.artist_ids = artist_ids;
        this.booster = booster;
        this.border_color = border_color;
        this.card_back_id = card_back_id;
        this.collector_number = collector_number;
        this.digital = digital;
        this.flavor_text = flavor_text;
        this.frame_effects = frame_effects;
        this.frame = frame;
        this.full_art = full_art;
        this.games = games;
        this.highres_image = highres_image;
        this.illustration_id = illustration_id;
        this.image_uris = image_uris;
        this.prices = prices;
        this.printed_name = printed_name;
        this.printed_text = printed_text;
        this.printed_type_line = printed_type_line;
        this.promo = promo;
        this.promo_types = promo_types;
        this.purchase_uris = purchase_uris;
        this.rarity = rarity;
        this.related_uris = related_uris;
        this.released_at = released_at;
        this.reprint = reprint;
        this.scryfall_set_uri = scryfall_set_uri;
        this.set_name = set_name;
        this.set_search_uri = set_search_uri;
        this.set_type = set_type;
        this.set_uri = set_uri;
        this.set = set;
        this.story_spotlight = story_spotlight;
        this.textless = textless;
        this.variation = variation;
        this.variation_of = variation_of;
        this.watermark = watermark;
        this.preview = preview;
    }
}
