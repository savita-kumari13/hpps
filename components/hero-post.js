import Link from 'next/link';
import Avatar from '../components/avatar';
import DateComponent from '../components/date';
import CoverImage from '../components/cover-image';

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
	return (
		<section>
			<div className='mb-8 md:mb-16'>
				<CoverImage title={title} slug={slug} url={coverImage.url} />
			</div>
			<div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
				<div>
					<h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
						<Link href={`/posts/${slug}`}>
							<a className='hover:underline'>{title}</a>
						</Link>
					</h3>
					<div className='mb-4 md:mb-0 text-lg'>
						<DateComponent dateString={date} />
					</div>
				</div>
				<div>
					<p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
					{author && <Avatar name={author.name} picture={author.picture} />}
				</div>
			</div>
		</section>
		// <>
		// 	<main className='main'>
		// 		<section
		// 			id='home'
		// 			data-bg='../images/harry-potter-hero.jpg'
		// 			style={{ backgroundImage: 'url(' + '../images/harry-potter-hero.jpg' + ')' }}
		// 			className='hero lazyload scrollspy'
		// 		>
		// 			<h1 className='hero__title'>
		// 				<a href='https://harrypotterpuzzlesandspells.com'>
		// 					<div className='mediabox ratio-4-3'>
		// 						<img src='../images/logo/logo_en.png' alt='Harry Potter Puzzles &amp; Spells' className='hero__img mediabox-img lazyload' />
		// 					</div>
		// 				</a>
		// 			</h1>
		// 		</section>{' '}
		// 		<div className='main-title'>
		// 			<div className='container'>
		// 				<div className='main-title__title'>
		// 					<h2>
		// 						<img src='../images/embel.png' alt='Embellishment' width='60' height='auto' className='main-title__embel' />
		// 						Play now!
		// 						<img src='../images/embel.png' alt='Embellishment' width='60' height='auto' className='main-title__embel' />
		// 					</h2>
		// 				</div>
		// 				<div className='divider'></div>
		// 				<a href='#signup' role='button' aria-label='Scroll Down' className='arrow-down'></a>
		// 			</div>
		// 		</div>
		// 		<div className='store-btns'>
		// 			<a role='button' href='https://harrypottermatch3.onelink.me/SPBr/hppsweb' aria-label='AppStore' className='store-btns__item'>
		// 				<img src='../images/badges/appstore.png' alt='AppStore' className='lazyload' />
		// 			</a>
		// 			<a role='button' href='https://harrypottermatch3.onelink.me/SPBr/hppsweb' aria-label='Google Play' className='store-btns__item'>
		// 				<img src='../images/badges/googleplay.png' alt='Google Play' className='lazyload' />
		// 			</a>
		// 			<a role='button' href='https://harrypottermatch3.onelink.me/SPBr/hppsweb' aria-label='Facebook' className='store-btns__item'>
		// 				<img src='../images/badges/facebook-gaming.png' alt='Facebook' className='lazyload' />
		// 			</a>
		// 			<a role='button' href='https://harrypottermatch3.onelink.me/SPBr/hppsweb' aria-label='Amazon' className='store-btns__item'>
		// 				<img src='../images/badges/amazon.png' alt='Amazon' className='lazyload' />
		// 			</a>
		// 		</div>
		// 		<section id='trailer' className='trailer scrollspy'>
		// 			<div className='container'>
		// 				<img src='../images/flying-red-gem.png' alt='Flying red gem' className='lazyload gem gem--red' />
		// 				<img src='../images/floating-keys.png' alt='Floating keys' className='lazyload keys keys--1' />

		// 				<h2 className='title-stars tracking-display'>
		// 					<img src='../images/stars.png' alt='Stars' width='auto' height='45' className='title-stars__img' />
		// 					<span>Trailer</span>
		// 					<img src='../images/stars.png' alt='Stars' width='auto' height='45' className='title-stars__img' />
		// 				</h2>

		// 				<div className='embed-wrap'>
		// 					<img src='../images/frame-embel.png' className='video__corner video__corner--top-l' alt='Embellishment' />
		// 					<img src='../images/frame-embel.png' className='video__corner video__corner--top-r' alt='Embellishment' />
		// 					<img src='../images/frame-embel.png' className='video__corner video__corner--bottom-l' alt='Embellishment' />
		// 					<img src='../images/frame-embel.png' className='video__corner video__corner--bottom-r' alt='Embellishment' />
		// 					<video
		// 						id='my_video_1'
		// 						className='video-js vjs-skin-zynga embed-responsive embed-responsive-16by9'
		// 						controls
		// 						preload='auto'
		// 						data-setup='{ "asdf": true }'
		// 						poster='../images/trailer-poster-play-now.jpg'
		// 					>
		// 						<source src='/videos/trailer_en.mp4' type='video/mp4' />
		// 					</video>
		// 				</div>

		// 				<img src='../images/floating-keys-right.png' alt='Floating keys' className='lazyload keys keys--2' />
		// 			</div>
		// 		</section>
		// 		<section id='about' className='about scrollspy'>
		// 			<div className='container'>
		// 				<img src='../images/divider.png' alt='Divider' className='divider-img lazyload' />

		// 				<div className='about__content'>
		// 					<h2 className='title-stars'>
		// 						<img src='../images/stars.png' alt='Stars' width='auto' height='45' className='title-stars__img lazyload' />
		// 						<span className='tracking-display'>Harry Potter: Puzzles & Spells</span>
		// 						<img src='../images/stars.png' alt='Stars' width='auto' height='45' className='title-stars__img hide-sm lazyload' />
		// 					</h2>
		// 					<p>
		// 						It’s time to represent your Hogwarts house and celebrate the magic of Harry Potter like never before! Prepare to master spells,
		// 						outsmart challenges, and explore the wonders of the Wizarding World while becoming enthralled by the most marvelous matching Puzzles
		// 						ever found on your mobile device!
		// 					</p>
		// 				</div>

		// 				<img src='../images/divider.png' alt='Divider' className='divider-img lazyload' />
		// 			</div>
		// 		</section>
		// 		<section id='features' className='feat scrollspy'>
		// 			<div className='container'>
		// 				<div className='feat__item'>
		// 					<img src='../images/flying-blue-gem.png' alt='Flying blue gem' className='lazyload gem gem--blue' />

		// 					<div className='feat__title'>
		// 						<div className='feat__divider feat__divider--red'></div>
		// 						<img src='../images/embel-red.png' alt='Embellishment' width='auto' height='30' className='lazyload' />

		// 						<h3 className='tracking-display'>Celebrate Iconic Moments </h3>

		// 						<img src='../images/embel-red.png' alt='Embellishment' width='auto' height='30' className='lazyload' />
		// 						<div className='feat__divider feat__divider--red'></div>
		// 					</div>

		// 					<div className='feat__body'>
		// 						<div className='feat__col'>
		// 							<div className='mediabox ratio-square'>
		// 								<img
		// 									data-lowsrc='../images/feature-1-low.png'
		// 									src='../images/feature-1.png'
		// 									alt='Feature 1'
		// 									className='feat__img mediabox-img lazyload'
		// 								/>
		// 							</div>
		// 						</div>
		// 						<div className='feat__col'>
		// 							<p>
		// 								With each Puzzle you complete, step further into the wonder and mystery of Harry Potter’s story. Revel in the sights and sounds of
		// 								Diagon Alley, Hogwarts School of Witchcraft and Wizardry, and more of your favourite locations from the Wizarding World! Follow
		// 								Harry, Ron, Hermione, and the other familiar faces as they brew potions, duel with trolls, and uncover the magic of the Wizarding
		// 								World!{' '}
		// 							</p>
		// 						</div>
		// 					</div>

		// 					<img src='../images/flying-green-gem.png' alt='Flying green gem' className='lazyload gem gem--green' />
		// 				</div>

		// 				<div className='feat__item'>
		// 					<div className='feat__title'>
		// 						<div className='feat__divider feat__divider--blue'></div>
		// 						<img src='../images/embel-blue.png' alt='Embellishment' width='auto' height='30' className='lazyload' />

		// 						<h3 className='tracking-display'>Master Magical Spells </h3>

		// 						<img src='../images/embel-blue.png' alt='Embellishment' width='auto' height='30' className='lazyload' />
		// 						<div className='feat__divider feat__divider--blue'></div>
		// 					</div>

		// 					<div className='feat__body feat__body--reverse'>
		// 						<div className='feat__col'>
		// 							<div className='mediabox ratio-square'>
		// 								<img
		// 									data-lowsrc='../images/feature-2-low.png'
		// 									src='../images/feature-2.png'
		// 									alt='Feature 2'
		// 									className='feat__img mediabox-img lazyload'
		// 								/>
		// 							</div>
		// 						</div>
		// 						<div className='feat__col'>
		// 							<p>
		// 								With magic at your disposal, you will bravely encounter thrilling challenges! Swish-and-flick your way through unique Puzzles as
		// 								you levitate and dispel obstacles in your way. Earn Points to level up your spells to help you plunge deeper into more challenging
		// 								moments!{' '}
		// 							</p>
		// 						</div>
		// 					</div>
		// 				</div>

		// 				<div className='feat__item'>
		// 					<img src='../images/floating-feathers-left.png' alt='Floating feathers' className='lazyload feathers feathers--left' />

		// 					<div className='feat__title'>
		// 						<div className='feat__divider feat__divider--gold'></div>
		// 						<img src='../images/embel-gold.png' alt='Embellishment' width='auto' height='30' className='lazyload' />

		// 						<h3 className='tracking-display'>Play Engaging Match-3 </h3>

		// 						<img src='../images/embel-gold.png' alt='Embellishment' width='auto' height='30' className='lazyload' />
		// 						<div className='feat__divider feat__divider--gold'></div>
		// 					</div>

		// 					<div className='feat__body'>
		// 						<div className='feat__col'>
		// 							<div className='mediabox ratio-square'>
		// 								<img
		// 									data-lowsrc='../images/feature-3-low.png'
		// 									src='../images/feature-3.png'
		// 									alt='Feature 3'
		// 									className='feat__img mediabox-img lazyload'
		// 								/>
		// 							</div>
		// 						</div>
		// 						<div className='feat__col'>
		// 							<p>
		// 								Help Chocolate Frogs hop and Winged Keys fly across hundreds of Match-3 Puzzles! Utilise boosts and power ups to clear hazards
		// 								themed to iconic Harry Potter elements. Participate in spell upgrade events featuring Hogwarts professors, as you solve Puzzles
		// 								themed around Defence Against the Dark Arts, Potions, and other Hogwarts lessons on your way to earning fantastic Rewards!{' '}
		// 							</p>
		// 						</div>
		// 					</div>

		// 					<img src='../images/floating-feathers-right.png' alt='Floating feathers' className='lazyload feathers feathers--right' />
		// 				</div>

		// 				<div className='feat__item'>
		// 					<div className='feat__title'>
		// 						<div className='feat__divider feat__divider--green'></div>
		// 						<img src='../images/embel-green.png' alt='Embellishment' width='auto' height='30' className='lazyload' />

		// 						<h3 className='tracking-display'>Share it all with your Friends! </h3>

		// 						<img src='../images/embel-green.png' alt='Embellishment' width='auto' height='30' className='lazyload' />
		// 						<div className='feat__divider feat__divider--green'></div>
		// 					</div>

		// 					<div className='feat__body feat__body--reverse'>
		// 						<div className='feat__col'>
		// 							<div className='mediabox ratio-square'>
		// 								<img
		// 									data-lowsrc='../images/feature-4-low.png'
		// 									src='../images/feature-4.png'
		// 									alt='Feature 4'
		// 									className='feat__img mediabox-img lazyload'
		// 								/>
		// 							</div>
		// 						</div>
		// 						<div className='feat__col'>
		// 							<p>
		// 								With a growing list of exciting events, playing with friends has never been more fun! Prove you possess the intelligence of
		// 								Ravenclaw as you conquer the Club Challenge; use the cunning of a Slytherin to confound your opponents in Magical Mischief; put on
		// 								a display of bravery to help Gryffindor climb to the top of the className with House Pride, or demonstrate the loyalty of
		// 								Hufflepuff as you share lives to help your teammates toward victory!{' '}
		// 							</p>
		// 						</div>
		// 					</div>

		// 					<img src='../images/flying-yellow-gem.png' alt='Flying yellow gem' className='lazyload gem gem--yellow' />
		// 				</div>
		// 			</div>
		// 		</section>
		// 		<div className='share'>
		// 			<ul className='share__list'>
		// 				<li className='share__item'>
		// 					<a id='footer-share-facebook' href='https://www.facebook.com/harrypotterpuzzlesandspells/' target='_blank' rel='noopener noreferrer'>
		// 						<img src='../images/icons/facebook.svg' alt='Facebook' height='45' width='auto' />
		// 					</a>
		// 				</li>
		// 				<li className='share__item'>
		// 					<a id='footer-share-instagram' href='https://www.instagram.com/harrypotterpuzzlesandspells/' target='_blank' rel='noopener noreferrer'>
		// 						<img src='../images/icons/instagram.svg' alt='Instagram' height='45' width='auto' />
		// 					</a>
		// 				</li>
		// 				<li className='share__item'>
		// 					<a id='footer-share-twitter' href='https://twitter.com/hppuzzlesspells/' target='_blank' rel='noopener noreferrer'>
		// 						<img src='../images/icons/twitter.svg' alt='Twitter' height='45' width='auto' />
		// 					</a>
		// 				</li>
		// 				<li className='share__item'>
		// 					<a
		// 						id='footer-share-email'
		// 						href='mailto:?&subject=Harry Potter Magical Match-3 Puzzle Game | Zynga - Portkey&body=Celebrate the magic of Harry Potter with the new free online match-3 puzzle game! Prepare to master spells and explore the wonders of the Wizarding World.%20https%3A%2F%2Fharrypotterpuzzlesandspells.com'
		// 					>
		// 						<img src='../images/icons/email.svg' alt='Email' height='45' width='auto' />
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</main>
		// 	<footer>
		// 		<div className='container'>
		// 			<div className='logos'>
		// 				<a href='https://www.wbgames.com' target='_blank' rel='noopener noreferrer' className='footer-logo'>
		// 					<img src='../images/logos/wb.png' alt='Warner Bros.' height='110' width='auto' className='lazyload' />
		// 				</a>
		// 				<a href='https://www.wizardingworld.com' target='_blank' rel='noopener noreferrer' className='footer-logo'>
		// 					<img src='../images/logos/wizarding-world.svg' alt='Wizarding World' height='50' width='auto' className='lazyload' />
		// 				</a>
		// 				<a href='https://www.portkeygames.com' target='_blank' rel='noopener noreferrer' className='footer-logo'>
		// 					<img src='../images/logos/portkey-games.svg' alt='Portkey Games' height='50' width='auto' className='lazyload' />
		// 				</a>
		// 				<a href='http://zynga.com' target='_blank' rel='noopener noreferrer' className='footer-logo'>
		// 					<img src='../images/logos/zynga.svg' alt='Zynga' height='50' width='auto' className='lazyload' />
		// 				</a>
		// 			</div>

		// 			<small className='footnote'>
		// 				WIZARDING WORLD, HARRY POTTER Publishing Rights © J.K. Rowling. HARRY POTTER: PUZZLES & SPELLS, PORTKEY GAMES,
		// 				<br />
		// 				WIZARDING WORLD and HARRY POTTER characters, names and related indicia © and ™ Warner Bros. Entertainment Inc. (s22) © and ™ Zynga Inc.
		// 				All Rights Reserved.
		// 				<br />
		// 				<br />
		// 				<img
		// 					src='../images/logos/wb-icon.png'
		// 					alt='Warner Bros.'
		// 					height='17'
		// 					width='auto'
		// 					className='lazyload'
		// 					style={{ verticalAlign: 'top' }}
		// 				/>
		// 				<span style={{ fontSize: '104%' }}>
		// 					{' '}
		// 					WARNER BROS. INTERACTIVE ENTERTAINMENT LOGO, WB SHIELD: ™ & © Warner Bros. Entertainment Inc. (s22)
		// 				</span>
		// 			</small>

		// 			<img src='../images/footer-embel.png' alt='Embellishment' className='footer-embel footer-embel--left' width='100' height='auto' />
		// 			<img src='../images/footer-embel.png' alt='Embellishment' className='footer-embel footer-embel--right' width='100' height='auto' />
		// 		</div>
		// 	</footer>
		// 	<div id='overlay' className='overlay' style={{ opacity: 0 }}>
		// 		<div className='overlay-menu'>
		// 			<nav>
		// 				<ul>
		// 					<li>
		// 						<a id='mobile-menu-item-1' href='https://harrypotterpuzzlesandspells.com#home'>
		// 							Home
		// 						</a>
		// 					</li>

		// 					<li>
		// 						<a id='mobile-menu-item-2' href='https://harrypotterpuzzlesandspells.com#trailer'>
		// 							Trailer
		// 						</a>
		// 					</li>

		// 					<li>
		// 						<a id='mobile-menu-item-3' href='https://harrypotterpuzzlesandspells.com#about'>
		// 							About
		// 						</a>
		// 					</li>

		// 					<li>
		// 						<a id='mobile-menu-item-4' href='https://harrypotterpuzzlesandspells.com#features'>
		// 							Features
		// 						</a>
		// 					</li>

		// 					<li>
		// 						<a id='mobile-menu-item-5' href='https://harrypotterpuzzlesandspells.com/faq'>
		// 							FAQ
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</nav>
		// 			<div className='share-overlay'>
		// 				<ul className='share-overlay__list'>
		// 					<li className='share-overlay__item'>
		// 						<a id='share-facebook' href='https://www.facebook.com/harrypotterpuzzlesandspells/' target='_blank' rel='noopener noreferrer'>
		// 							<img src='../images/icons/facebook.svg' alt='Facebook' height='30' width='auto' />
		// 						</a>
		// 					</li>
		// 					<li className='share-overlay__item'>
		// 						<a id='share-instagram' href='https://www.instagram.com/harrypotterpuzzlesandspells/' target='_blank' rel='noopener noreferrer'>
		// 							<img src='../images/icons/instagram.svg' alt='Instagram' height='30' width='auto' />
		// 						</a>
		// 					</li>
		// 					<li className='share-overlay__item'>
		// 						<a id='share-twitter' href='https://twitter.com/hppuzzlesspells/' target='_blank' rel='noopener noreferrer'>
		// 							<img src='../images/icons/twitter.svg' alt='Twitter' height='30' width='auto' />
		// 						</a>
		// 					</li>
		// 					<li className='share-overlay__item'>
		// 						<a
		// 							id='share-email'
		// 							href='mailto:?&subject=Harry Potter Magical Match-3 Puzzle Game | Zynga - Portkey&body=Celebrate the magic of Harry Potter with the new free online match-3 puzzle game! Prepare to master spells and explore the wonders of the Wizarding World.%20https%3A%2F%2Fharrypotterpuzzlesandspells.com'
		// 						>
		// 							<img src='../images/icons/email.svg' alt='Email' height='30' width='auto' />
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>
		// </>
	);
}
