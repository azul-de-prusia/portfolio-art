import React, {Component} from 'react';
import '../App.css';


class Useless extends Component{
    render(){
        return(
            <div className="useless">
                <div>
                <h1>Useless extra data</h1>
                <h3>Here you can find a collection of some of the things I like really much in life</h3>
                </div>
                <div className="flip-container">
                    <ul>
                    
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/yQzgmwK/escher.jpg" id="img"alt=""></img></div>
                                    <div class="back">
                                        <h1>M. C. Escher</h1>
                                    <p>(1898-1972) was a draftsman, book illustrator, tapestry designer, and muralist, but his primary work was as a printmaker. Born in Leeuwarden, Holland, the son of a civil engineer, Escher spent most of his childhood in Arnhem.</p>
                                 </div>
                            </div>
                        </li>
                       
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/TqmSxyq/remedios.jpg" alt=""id="imgw"></img></div>
                                    <div class="back">
                                        <h1>Remedios Varo</h1>
                                    <p>PSpanish-Mexican artist who played an integral role in the Mexico City-based Surrealist movement. She is known for her enigmatic paintings of androgynous beings engaged in magic arts or the occult.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/59ydS0M/goya.jpg" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h1>Goya</h1>
                                    <p>Spanish romantic painter and printmaker. He is considered the most important Spanish artist of the late 18th and early 19th centuries and throughout his long career was a commentator and chronicler of his era. Immensely successful in his lifetime, Goya is often referred to as both the last of the Old Masters and the first of the moderns. </p>
                                 </div>
                            </div>
                        </li>

                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="data:image/jpeg;base64,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" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h1>Saturnino Herrán</h1>
                                    <p>Considered as a precursor of Mexican muralism and a renovator of nationalist art, since, thanks to his mastery of technique and his ability to reflect various moods, he was able to describe Mexican traditions in a new way in a style that has been described as modernist -customist.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/W69qP30/otto-dix.jpg" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h1>Otto Dix</h1>
                                    <p>Was a German painter and printmaker, noted for his ruthless and harshly realistic depictions of German society during the Weimar Republic and the brutality of war.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/YZc3XKD/leonora.jpg" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h1>Leonora Carrington</h1>
                                    <p>Was a British-born Mexican artist, surrealist painter, and novelist. She lived most of her adult life in Mexico City and was one of the last surviving participants in the Surrealist movement of the 1930s.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/7zpKp4K/orozco.jpg" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h1>José Clemente Orozco</h1>
                                    <p>He was a Mexican cartoonist, muralist and printmaker who helped lead the revival of Mexican mural painting in the 1920s. His works are complex and often tragic.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/QXDFmsN/van-gogh.jpg" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h1>Vincent Van Gogh</h1>
                                    <p>Dutch painter, generally considered the greatest after Rembrandt van Rijn, and one of the greatest of the Post-Impressionists. The striking colour, emphatic brushwork, and contoured forms of his work powerfully influenced the current of Expressionism in modern art. </p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/Qbtk44m/beksinski.jpg" id="img"alt=""></img></div>
                                    <div class="back">
                                        <h1>Zdzisław Beksínski</h1>
                                    <p>Polish painter, photographer and sculptor. He executed his drawings and paintings of a genre that he himself called baroque or gothic.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/k2vGShq/posada.jpg" id="imgw"alt=""></img></div>
                                    <div class="back">
                                        <h2>José Guadalupe Posada</h2>
                                    <p>Mexican political litographist who used relief printing to produce popular illustrations. His work has influenced numerous Latin American artists and cartoonists because of its satirical acuteness and social engagement. He used skulls, calaveras, and bones to convey political and cultural critiques. Among his most enduring works is La Calavera Catrina. </p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/g3LpqFL/cioran.jpg" id="img"alt=""></img></div>
                                    <div class="back">
                                       <h1>E. M. Cioran</h1>
                                    <p>Romanian philosopher and essayist, who published works in both Romanian and French. His work has been noted for its pervasive philosophical pessimism, and frequently engages with issues of suffering, decay, and nihilism. Among his best-known works are On the Heights of Despair (1934) and The Trouble with Being Born (1973). Cioran's first French book, A Short History of Decay, was awarded the prestigious Rivarol Prize in 1950.</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/Y2PQBPC/hpl.jpg" id="img"alt=""></img></div>
                                    <div class="back">
                                       <h1>Howard Phillips Lovecraft</h1>
                                    <p>American writer of weird fiction and horror fiction. Born in Providence, Rhode Island, he spent most of his life there, and his fiction was primarily set against a New England backdrop.</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeDmXj19Fi32Jt0W7pn7mgFArb9UZv3_nR_LOKB7S57arTS6Xv" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h1>The stranger, by Albert Camus</h1>
                                    <p>The stranger is the first novel by the French writer Albert Camus, published in 1942. The foreigner is usually associated with the philosophy of absurdity and existentialism, although Camus always distanced himself from this last label.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/6nKRvS6/arthur.jpg" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h2>Arthur Schopenhauer</h2>
                                    <p>German philosopher, he is best known for his 1818 work The World as Will and Representation, wherein he characterizes the phenomenal world as the product of a blind and insatiable metaphysical will. Schopenhauer developed an atheistic metaphysical and ethical system that has been described as an exemplary manifestation of philosophical pessimism, rejecting the contemporaneous post-Kantian philosophies of German idealism.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/tDG73jD/sartre.jpg" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h2>The nausea, by Jean Paul Sartre</h2>
                                    <p>After spending a few years traveling, Antoine Roquentin, a thirty-year-old man who enjoys a modest income, is installed in the port city of Bouville dedicated to writing a book about a murky 18th-century aristocrat. However, one day he is assaulted by an unknown sensation, the Nausea, whose revelation as the radical feeling of contingency and the loneliness of the human being will completely change his life of meaning. Published in 1938, "La naúsea" by Jean-Paul Sartre is, along with "El foreigner" by Albert Camus, the novel that most emblematically embodies the flow of existentialist thought</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/C79GD7D/sopor.jpg" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h2>Sopor Aeternus & the ensemble of shadows</h2>
                                    <p> Darkwave musical project based in Frankfurt, founded in 1989 by Anna-Varney Cantodea.Anna-Varney's work is extremely personalized, melancholic and pessimistic, drawing on a number of different musical and visual styles, and has garnered a cult following.</p>
                                 </div>
                            </div>
                        </li>
                       
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/zF32VG7/smiths.jpg" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h1>The Smiths</h1>
                                    <p>Prime exponents of British alternative rock, the Smiths were based around the unlikely partnership of singer-lyricist Morrissey (a reclusive bookworm inspired as much by Oscar Wilde as by his glam-rock heroes the New York Dolls) and budding guitar hero Marr. </p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/0hhP8JS/Kazuo-Ohno-and-son.jpg" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h1>Butoh dance</h1>
                                    <p>Is a form of Japanese dance theatre that encompasses a diverse range of activities, techniques and motivations for dance, performance, or movement. Following World War II, butoh arose in 1959 through collaborations between its two key founders Tatsumi Hijikata and Kazuo Ohno.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://66.media.tumblr.com/95e7eaddfe9348f2ebaadf5c8fce1305/tumblr_p1qukgyhFL1u1l10jo4_250.gifv" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h1>Jan Svankmajer
                                        </h1>
                                    <p>Czech Surrealist artist, puppeteer, animator, and filmmaker known for his dark reimaginings of well-known fairy tales and for his avant-garde use of three-dimensional stop-motion coupled with live-action animation.</p>
                                 </div>
                            </div>
                        </li>
                        
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/bdQSBq8/ezgif-com-crop-4.gif" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h2>Eraserhead, by David Lynch</h2>
                                    <p>Eraserhead is a 1977 American experimental body horror film written, produced, and directed by David Lynch. Henry Spencer, a depressed and scary young man, suffers from a few strange nightmares from which he tries to free himself through his imagination. When Henry is invited to dinner at his friend Mary's house, he learns that he has been the father of a baby.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/YNxhKzy/dont-hug-me-in.gif" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h2>Don´t hug me I´m scared</h2>
                                    <p>is a surreal horror comedy web series created by British filmmakers Becky Sloan and Joseph Pelling. It consists of six episodes, released from July 29 2011 to June 19 2016 through the artists' website, YouTube and Vimeo.The series combines segments in live action, puppetry, traditional animation, and computer animation. </p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Rick_and_Morty_season_4.png/250px-Rick_and_Morty_season_4.png" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h1>Rick and Morty</h1>
                                    <p>Is an American television series for adult animation created by Justin Roiland and Dan Harmon for Adult Swim. The series follows the misadventures of a scientist, Rick, and his easily influenced grandson, Morty, who spend time between domestic life and space, time and intergalactic travel.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/8jx6myf/flapjack.jpg" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h2>The marvelous misadventures of Flapjack</h2>
                                    <p>Animated series about Flapjack, a naïve young boy who was raised by a whale named Bubbie and is mentored by a salty sea pirate called Captain K'nuckles. Together the trio spend their days in Stormalong Harbor, where most of the show takes place, whilst on the search for the elusive Candied Island. </p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/J3ts7XT/twilight.jpg" alt="" id="img"></img></div>
                                    <div class="back">
                                        <h1>The twilight zone</h1>
                                    <p>American media franchise based on the anthology television series created by Rod Serling. The episodes are in various genres, including fantasy, science fiction, suspense, horror, and psychological thriller, often concluding with a macabre or unexpected twist, and usually with a moral.</p>
                                 </div>
                            </div>
                        </li>
                        <li className="card">
                            <div id="card1" class="card">
                                <div class="front"><img src="https://i.ibb.co/dQfbKzG/adventure-time.jpg" alt="" id="imgw"></img></div>
                                    <div class="back">
                                        <h2>Adventure Time</h2>
                                    <p>American fantasy animated television series created for Cartoon Network. The series follows the adventures of a boy named Finn and his best friend and adoptive brother Jake a dog with the magical power to change shape and size at will. Finn and Jake live in the post-apocalyptic Land of Ooo, where they interact with Princess Bubblegum, the Ice King, Marceline, BMO, and others. </p>
                                 </div>
                            </div>
                        </li>
                    </ul>
        </div>

       
            </div>

        );

    }
};

export default Useless;