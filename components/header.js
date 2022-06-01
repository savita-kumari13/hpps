import Link from 'next/link';
// import Image from 'next/image';

// import fb from '../public/images/icons/facebook.svg';

export default function Header() {
	return (
		<h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
			<Link href='/'>
				<a className='hover:underline'>Blog</a>
			</Link>
			.
		</h2>

		// <header className='header_en'>
		// 	<div className='container'>
		// 		<div className='banner'>
		// 			<button id='btn-menu' className='hamburger hamburger--slider hamburger--collapse' type='button' aria-label='Menu'>
		// 				<span className='hamburger-box'>
		// 					<span className='hamburger-inner'></span>
		// 				</span>
		// 			</button>
		// 			<nav id='main-menu' className='nav-main'>
		// 				<ul>
		// 					<li>
		// 						<a id='menu-item-1' className='menu-item active' href='#home'>
		// 							Home
		// 						</a>
		// 					</li>

		// 					<li>
		// 						<a id='menu-item-2' className='menu-item' href='#trailer'>
		// 							Trailer
		// 						</a>
		// 					</li>

		// 					<li>
		// 						<a id='menu-item-3' className='menu-item' href='#about'>
		// 							About
		// 						</a>
		// 					</li>

		// 					<li>
		// 						<a id='menu-item-4' className='menu-item' href='#features'>
		// 							Features
		// 						</a>
		// 					</li>

		// 					<li>
		// 						<a id='menu-item-5' className='' href='https://harrypotterpuzzlesandspells.com/en/faq'>
		// 							FAQ
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</nav>

		// 			<div className='share-top'>
		// 				<ul className='share-top__list'>
		// 					<li className='share-top__item'>
		// 						<a id='share-facebook' href='https://www.facebook.com/harrypotterpuzzlesandspells/' target='_blank' rel='noopener noreferrer'>
		// 							<Image src={fb} alt='Facebook' height='28' />
		// 						</a>
		// 					</li>
		// 					<li className='share-top__item'>
		// 						<a id='share-instagram' href='https://www.instagram.com/harrypotterpuzzlesandspells/' target='_blank' rel='noopener noreferrer'>
		// 							<img src='../images/icons/instagram.svg' alt='Instagram' height='28' width='auto' />
		// 						</a>
		// 					</li>
		// 					<li className='share-top__item'>
		// 						<a id='share-twitter' href='https://twitter.com/hppuzzlesspells/' target='_blank' rel='noopener noreferrer'>
		// 							<img src='../images/icons/twitter.svg' alt='Twitter' height='28' width='auto' />
		// 						</a>
		// 					</li>
		// 					<li className='share-top__item'>
		// 						<a
		// 							id='share-email'
		// 							href='mailto:?&subject=Harry Potter Magical Match-3 Puzzle Game | Zynga - Portkey&body=Celebrate the magic of Harry Potter with the new free online match-3 puzzle game! Prepare to master spells and explore the wonders of the Wizarding World.%20https%3A%2F%2Fharrypotterpuzzlesandspells.com'
		// 						>
		// 							<img src='../images/icons/email.svg' alt='Email' height='28' width='auto' />
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className='lang'>
		// 				<button className='lang__selected'>
		// 					English <img src='../images/icons/chevron-down.svg' alt='Arrow Down' />
		// 				</button>

		// 				<div className='bubble'>
		// 					<ul className='lang__list'>
		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/nl/' hrefLang='https://harrypotterpuzzlesandspells.com/nl/'>
		// 								Nederlands
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/fr/' hrefLang='https://harrypotterpuzzlesandspells.com/fr/'>
		// 								Français
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/de/' hrefLang='https://harrypotterpuzzlesandspells.com/de/'>
		// 								Deutsch
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/it/' hrefLang='https://harrypotterpuzzlesandspells.com/it/'>
		// 								Italiano
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/jp/' hrefLang='https://harrypotterpuzzlesandspells.com/jp/'>
		// 								日本語
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/ko/' hrefLang='https://harrypotterpuzzlesandspells.com/ko/'>
		// 								한국어
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/pl/' hrefLang='https://harrypotterpuzzlesandspells.com/pl/'>
		// 								Polski
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a
		// 								className='lang__link'
		// 								href='https://harrypotterpuzzlesandspells.com/pt_BR/'
		// 								hrefLang='https://harrypotterpuzzlesandspells.com/pt_BR/'
		// 							>
		// 								Português (Brazil)
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/ru/' hrefLang='https://harrypotterpuzzlesandspells.com/ru/'>
		// 								Русский
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a
		// 								className='lang__link'
		// 								href='https://harrypotterpuzzlesandspells.com/zh_Hans/'
		// 								hrefLang='https://harrypotterpuzzlesandspells.com/zh_Hans/'
		// 							>
		// 								中文 (简体)
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/es/' hrefLang='https://harrypotterpuzzlesandspells.com/es/'>
		// 								Español
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/zh/' hrefLang='https://harrypotterpuzzlesandspells.com/zh/'>
		// 								中文 (繁體)
		// 							</a>
		// 						</li>

		// 						<li className='lang__item'>
		// 							<a className='lang__link' href='https://harrypotterpuzzlesandspells.com/tr/' hrefLang='https://harrypotterpuzzlesandspells.com/tr/'>
		// 								Türkçe
		// 							</a>
		// 						</li>
		// 					</ul>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </header>
	);
}
