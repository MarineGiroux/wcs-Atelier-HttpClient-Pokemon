export interface PokemonCard{
    data: Pokemon[];
}

export interface Pokemon{
    id : string;
    name : string;
    supertype : string;
    subtype : string[];
    hp : string;
    types : string[];
    evolvesFrom? : string;
    attacks : Attacks[];
    weaknesses : Weaknesses[];
    resistances : Resistances[];
    retreatCost : string[];
    convertedRetreatCost : number;
    set : Set;
    number : string;
    artist : string;
    rarity : string;
    flavorText : string;
    nationalPokedexNumbers : number[];
    legalities : Legalities;
    images : Images;
    tcgplayer : Tcgplayer;
    cardmarket : Cardmarket;
}

export interface Attacks{
    name : string;
    cost : string[];
    convertedEnergyCost : number;
    damage : string;
    text : string;
}

export interface Weaknesses{
    type : string;
    value : string;
}

export interface Resistances{
    type : string;
    value : string;
}

export interface Set {
    id : string;
    name : string;
    series : string;
    printedTotal : number;
    total : number;
    legalities : SetLegalities;
    ptcgoCode : string;
    releaseDate : string;
    updatedAt : string;
    images : SetImages;
}

export interface Legalities{
    unlimited : string;
}

export interface Images{
    small : string;
    large : string;
}

export interface Tcgplayer{
    url : string;
    updatedAt : string;
    prices : TcgplayerPrices;
}

export interface Cardmarket{
    url : string;
    updatedAt : string;
    prices : CardmarketPrices;
}

export interface SetLegalities{
    unlimited : string;
}

export interface SetImages{
    symbol : string;
    logo : string;
}

export interface TcgplayerPrices{
    holofoil : TcgplayerPricesHolofoil;
}

export interface TcgplayerPricesHolofoil{
    low : number;
    mid : number;
    high : number;
    market : number;
    directLow : number;
}

export interface CardmarketPrices{
    averageSellPrice : number;
    lowPrice : number;
    trendPrice : number;
    germanProLow : number;
    suggestedPrice : number;
    reverseHoloSell : number;
    reverseHoloLow : number;
    reverseHoloTrend : number;
    lowPriceExPlus : number;
    avg1 : number;
    avg7 : number;
    avg30 : number;
    reverseHoloAvg1 : number;
    reverseHoloAvg7 : number;
    reverseHoloAvg30 : number;
}