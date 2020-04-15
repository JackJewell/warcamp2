import React from "react";
import imperialFlag from "./Kateria.png";
import splashArt from "./splashArt.png";
import drengBanner from "./drengBanner.png";
import elvenBanner from "./elvenBanner.png";
import flanking from "./flanking.png";
import moveEx from "./moveEx.png";
import moveEx2 from "./moveEx2.png";
import infoCard from "./infoCard.png";
import "./style.css";

const About = () => {
    return(
        <div>
            <img id = "splash" src = {splashArt}></img>

            <h2>The World</h2>
                <p>Crownbreaker takes place in the world of Caracklyst, a harsh land of war and magic in which those within vie for dominance. 
                    To the southwest are the Kingdoms of the Katerian Empire, a venerable and weakened nation threatened as much by itself as external threats.
                    To the North east are the Great Houses of the Elven Kingdom of Kotimaa, a once proud and noble people who have fallen into paranoia, intrigue, and wasteful decadence.
                    And to the far North are the savage Clans of Drenglanda, sea-faring raiders and mercenaries who live for the chance to honor their ancient Gods in bloody combat.
                </p>
            <h2>Factions</h2>
            <div >
                <h3 className="faction">The Katerian Empire</h3><img id = "crest" src={imperialFlag}></img>
            </div>
            <hr></hr>
            <p>The Realms of The Katerian Empire are vast and varied, stretching from the far western-isle of Kateria itself, to the snow-capped peaks of the Myndhaern mountains in the east,
                and the sun-soaked shores of the Commerci Coast in the southern Kingdom of Costadoro. The 16 Kingdoms of the Empire live in unsteady peace with one another, but the power of the
                Emperor has weakened, and the kings threaten to break free at a moment's notice. 
            </p>
            <p>
                The Katerian Empire is but one tragic step away from dissolution, and the end of its long reign.
                A tragedy, such as the death of a Prince and the madness of his regal grieving father could be enough to tip the scales. The usurpation of the Emperor himself in a violent coup is almost 
                certain to.
            </p>
            <div >
                <h3 className="faction">The Kingdom of Kotimaa</h3><img id = "crest" src={elvenBanner}></img>
            </div>
            <hr></hr>
            <p>The Kingdom of Kotimaa is the homeland of the Elves, and is ruled by the Great Houses of the noble Lehyva, or High Elves. The Koyha, or Wood Elves, serve as the commoners of the realm,
                farming, crafting, and fighting for their High Elf masters. Once a bastion of civility and kindness, what honor the Elves once had has been long since stripped from them, torn away by an uncaring world,
                 and their nation has become the battleground for the Great Houses, each one vying to seat its Lord upon the throne of Tasarin. 
            </p>
            <p>
                But stirrings have occured, the Koyha, once equals to the Lehyva, yearn for the freedom they once had, and many no longer wish to serve their cruel masters as they descend farther 
                in the madness that's taken their society. The Red Banner has been seen flying over burned castles in the East, heralding the coming war.
            </p>
            <div >
                <h3 className="faction">The Clans of Drenglanda</h3><img id = "crest" src={drengBanner}></img>
            </div>
            <hr></hr>
            <p>The Dreng, derogatorily refered to as Orcs by those to their South, are a strong and warrior-like race. Their hulking frames, wild hair and rare speech means that many take them to
                be idiots or simpletons, but this is a clear underestimation, for beneath their heavy brows lie keen minds and a terrible strength. Many Dreng sell their services as mariners or 
                mercenaries, preferring life on the ocean or in battle to that of a farmer or craftsmen. 
            </p>
            <p>
                But few of them have been seen outside of their frost-bitten isles as of late, aside from
                the parties of vicous raiders sent to bring back loot and captives. Far in the North, whispers of the end-times abound. Whispers of the Long Winter and the coming of Jormangandr, 
                the Great World Serpent. The Dreng flock back to their homeland, for the Shamans fortell that Ragnarok, and the end of all things is upon them.
            </p>

            <h2>The Game</h2>
            <p>Crownbreaker is an abstracted war game designed for quick matches without sacrificing depth of strategy. </p>

            <h3>Order of Play:</h3>
            <p>The game is played in 6 rounds, each consisting of the following phases:</p>
            
            <u><h4>Order Phase:</h4></u>
            <p>During this phase each player issues Movement and Action orders to each of their units. These orders are concealed from their opponent.</p>
            <u><h4>Movement Phase:</h4></u>
            <p>During this phase movement orders are revealed and carried out in order of Priority. Once all Movement orders have been carried out, the Combat Phase begins.</p>
            <u><h4>Combat Phase:</h4></u>
            <p>During this phase Action orders are revealed and carried out in order of Priority. Once all Action orders have been carried out, Attacks are resolved. Damage in applied after all Attacks have been resolved.</p>
            <u><h4>Morale Phase:</h4></u>
            <p>During this phase each damaged unit must roll for Morale. After this phase is completed, a new round begins.</p>

            <h3>Info Card</h3>
            <img class = "infoCard" src = {infoCard}></img>
            <h3>Dictionary of Terms</h3>
            <div data-uk-accordion>
                <div className="uk-closed">
                    <h2 className="uk-accordion-title">Terms:</h2>
                    <div className="uk-accordion-content">
                        <dl className="uk-description-list uk-description-list-divider">
                            <dt>Movement</dt>
                            <dd>Movements are orders that can be issued to your units that change their position or formation on the battlefield. Movement Orders are issued during the Order Phase. The particular Movement Orders that can be issued to a unit are listed on the Unit's Info Card.</dd>
                            <dt>Action</dt>
                            <dd>Actions are orders that can be issued to your units that make them do things such as charge enemy units. Action Orders are issued during the Order Phase. The particular Action Orders that can be issued to a unit are listed on the Unit's Info Card.</dd>
                            <dt>Priority</dt>
                            <dd>Priority determines the order in which your units will carry out the orders issued to them. Priority is determined by you.</dd>
                            <dt>Engaged</dt>
                            <dd>A Unit is considered engaged with another Unit if it has been attacked and has not taken a disengage action. While a Unit is engaged it cannot be issued movement or action orders other than the Disengage Action Order.</dd>
                            <dt>Formation</dt>
                            <dd>Formations are trays that represent Units, inside them are miniatures. Rules wise, formations are stances that a Unit can take that effect they way they perform in combat.</dd>
                            <dt>Attack</dt>
                            <dd>Attacks are the way that units deal damage to one another. There are two kinds of attack, Melee and Ranged, which correspond to the Melee Skill and Ranged Skill characteristics on a unit's Info Card. Melee attacks are made when two units are within range of one another during the Combat Phase. The player manually selects which units their Ranged Units attack. Attacks are conducted at the same time unless specified, with damage being assigned at the end of the phase. </dd>
                            <dt>Morale</dt>
                            <dd>Morale corresponds with a unit's Bravery Score listed on their Info Card. During the Morale Phase, if a unit has taken damage during the Combat Phase, that unit must now roll for Morale. The unit rolls one(1) six-sided die per five(5) damage taken. If the result of the roll is a one(1) they must add a Fear Token to the Unit's Info Card. If the Unit has more Fear Tokens than their Bravery Score, it flees the battlefield and is lost to you.</dd>
                            <dt>Leadership</dt>
                            <dd>Leadership is a value that can be found on your Commander's Info Card. It determines order of play and is a spendable resource used to issue Reaction Orders.</dd>
                            <dt>Info Card</dt>
                            <dd>An Info Card is a card that contains all of the information about a unit. This includes the Unit's Melee Skill, Ranged Skill, Range, Armor Value, Manpower, and Bravery Score, along with the issuable orders such as Movement or Action Orders.</dd>
                            <dt>Melee Skill</dt>
                            <dd>A Unit's Melee Skill determines the number of six-sided dice it rolls during a melee Attack. One point of Melee Skill equals one six-sided die during a melee Attack.</dd>
                            <dt>Ranged Skill</dt>
                            <dd>A Unit's Ranged Skill determines the number of six-sided dice it rolls during a ranged Attack. One point of Ranged Skill equals one six-sided die during a ranged Attack.</dd>
                            <dt>Range</dt>
                            <dd>A Unit's Range determines how far away it can make a ranged Attack. </dd>
                            <dt>Armor Value</dt>
                            <dd>A Unit's Armor Value determines how much damage it takes during the Combat Phase. When an opponent makes an attack against a unit, they must subtract the unit's Armor Value from each six-sided die rolled. The remainder is the damage dealt to the Unit's Manpower.</dd>
                            <dt>Manpower</dt>
                            <dd>A Unit's Manpower represents the number of men inside the unit, as well as the amount of damage the Unit can take before being destroyed. When damage is dealt to a Unit, it is dealt to it's manpower.</dd>
                            <dt>Bravery Score</dt>
                            <dd>A Unit's Bravery Score represents the number of Fear Tokens that a Unit can receive before breaking and fleeing the field.</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <h3>Mechanics</h3>
            <div data-uk-accordion>
                <div className="uk-closed">
                    <h4 className="uk-accordion-title">Resolving Movement</h4>
                    <div className="uk-accordion-content">
                        <p>
                        During the Orders Phase you issue two kinds of orders to your units, Movement, and Action Orders. This section will focus on the former. Every Unit comes with a deck of Movement Orders that you can issue. They determine the direction and distance of the unit's move. During the Orders Phase you choose a single order out of each deck and issue it to the corresponding movement. Once you have made your choice, you place the card face down on the table right below that Unit's Info Card. Once all orders have been issued, the Orders Phase ends and the Movement Phase begins. 
                        <br></br>
                        <br></br>
                        In the Movement Phase you reveal and execute your orders in order of Priority. Priority is determined by distance from your Commander. The Player with the highest starting Leadership goes first. That player moves their highest Priority Unit first. They do this by flipping that Unit's Movement Order face-up, and then, using the corresponding template, adjust that unit's position on the battlefield.
                        <br></br>
                        <img src = {moveEx}></img> 
                        If a Unit encounters a friendly Unit or Terrain in its movement path, it may continue moving so long as it does not end its movement inside the other unit. If it does end inside either a friendly Unit or Terrain, it must immediately stop moving at the point in which it first encountered the object in question. If a Unit encounters an enemy Unit along its movement path, it immediately stops moving. 
                        <br></br>
                        <img src = {moveEx2}></img>
                        After this first Unit is done moving, the other player will move their highest Priority Unit, then it will pass back to the first player, and this pattern continues until all units have executed their Movement Orders.
                        </p>
                    </div>
                </div>
            </div>
            <div data-uk-accordion>
                <div className="uk-closed">
                    <h4 className="uk-accordion-title">Resolving Actions</h4>
                    <div className="uk-accordion-content">
                        <p>During the Orders Phase you issue two kinds of orders to your units, Movement, and Action Orders. 
                            This section will focus on the latter. Every Unit comes with a deck of Action Orders that you can issue. 
                            They determine how a unit will behave during combat. During the Orders Phase you choose a single order out of the deck and issue it to the corresponding Unit. 
                            Once you have made your choice, you place the card face down on the table right below that Unit's Info Card. 
                            Once all orders have been issued, the Orders Phase ends and the Movement Phase begins. 
                        </p>
                        <p>
                            After the Movement Phase ends, the Combat Phase begins. 
                            In the Combat Phase you reveal and execute your orders in order of Priority. 
                            Priority is determined by distance from your Commander. 
                            The Player with the highest starting Leadership goes first. 
                            That player activates their highest Priority Unit first. 
                            They do this by flipping that Unit's Action Order face-up, and then following its instructions.
                        </p>
                        <p>
                            For example, if the Unit has been issued a Charge Order, the Player, using the movement rules, will move the unit forward 3". 
                            If it ends within 1" of an enemy, it adds 2 to its Melee Skill for the rest of the round.
                        </p>
                    </div>
                </div>
            </div>
            <div data-uk-accordion>
                <div className="uk-closed">
                    <h4 className="uk-accordion-title">Resolving Attacks</h4>
                    <div className="uk-accordion-content">
                        <p>
                            Example: A unit of Infantry with a Melee Skill of 3, an Armor Value of 2, and a Manpower of 50 enters into combat with another, identical, unit of Infantry. 
                            Both units attack at the same time, meaning that their Players roll for damage at the same time.
                            <br></br>
                            <br></br>
                            Infantry Unit A:  Due to this unit's Melee Skill of 3, this Unit's player rolls three(3) six-sided dice.
                            <br></br>
                            <br></br>
                            The Results: 3 5 2
                            <br></br>
                            <br></br>
                            Due to Infantry Unit B having an Armor Value of two(2), each of these rolls are reduced by two(2)(To a minimum of zero).
                            <br></br>
                            <br></br>
                            Results after Armor: 1 3 0
                            <br></br>
                            <br></br>
                            These are now added together.
                            <br></br>
                            <br></br>
                            Sum: 4
                            <br></br>
                            <br></br>
                            This sum is now multiplied by 5, all damage in done in increments of 5 in order to make accounting for your units quick and easy.
                            <br></br>
                            <br></br>
                            Total Damage done: 4x5=20
                            <br></br>
                            <br></br>
                            During this time, Infantry Unit B has rolled and determined that they will do 30 damage to Infantry Unit A.
                            <br></br>
                            <br></br>
                            Now, with both totals determined, each Unit receives the damage from their opponent.
                            <br></br>
                            <br></br>
                            Infantry Unit A takes 30 damage. Its Manpower is now reduced to 20.
                            <br></br>
                            <br></br>
                            Infantry Unit B takes 20 damage. Its Manpower is now reduced to 30.
                            <br></br>
                            <br></br>
                            At this point the Combat Phase ends and the Morale Phase begins.
                        </p>
                    </div>
                </div>
            </div>
            <div data-uk-accordion>
                <div className="uk-closed">
                    <h4 className="uk-accordion-title">Resolving Morale</h4>
                    <div className="uk-accordion-content">
                        <p>
                        Example: Continuing with the previous example with Infantry Unit A and Infantry Unit B.
                        <br></br>
                        <br></br>
                        Both Units have a Bravery Score of six(6). 
                        <br></br>
                        <br></br>
                        Due to Infantry Unit A taking 30 damage, that player must now roll one(1) six-sided die per ten(10) damage that unit took. In this case, 30/10=3. Therefore the player must roll three(3) six-sided dice.
                        <br></br>
                        <br></br>
                        Results: 1 5 3
                        <br></br>
                        <br></br>
                        As you can see, the Player rolled a one(1). This means that they must put a Fear Token on this unit's Info Card. If a Unit has accumulated more Fear Tokens than its Bravery Score, at the end of the Morale Phase it flees the battlefield and is lost to the Player.
                        </p>
                    </div>
                </div>
            </div>
            <div data-uk-accordion>
                <div className="uk-closed">
                    <h4 className="uk-accordion-title">Flanking</h4>
                    <div className="uk-accordion-content">
                        <p>
                            When a unit attacks another Unit from the side or from behind, it is performing something called Flanking. During Flanking the Flanked Unit can only attack using half of its Melee Skill, making this an incredibly powerful tactic. For example, a Flanked Unit that has a Melee Skill of four(4), fights as if it had a Melee Skill of two(2). In situations where the number is uneven, round down.
                            <br></br>
                            <br></br>
                            A Flanked Unit:
                            <br></br>
                            <img src={flanking}></img>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;