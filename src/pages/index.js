import React, {useRef, useEffect} from "react"
import {applyPolyfills, defineCustomElements} from 'readability-gadget/loader';
import './index.scss';
import profile from '../assets/images/dariobrozzi.png';
import legos from '../assets/images/back-home.jpg';


applyPolyfills().then(() => {
    defineCustomElements();
});

const IndexPage = () => {
    const elementRef = useRef(null);

    const onReadabilityNavSelected = event => {
        let [currentClassName, newClassName] = event.detail;
        if (currentClassName) {
            document.body.classList.remove(currentClassName);
        }
        document.body.classList.add(newClassName);
    };

    useEffect(() => {
        const readabilityNav = elementRef.current;
        readabilityNav.addEventListener('optionSelected', onReadabilityNavSelected);
    });

    return (
        <>
            <header className='header'>
                <h1 className='header__title'><span>Dario</span> <span>Brozzi</span></h1>
                <h2 className='header__subtitle'>Frontend Developer / UI Engineer</h2>

                <readability-nav ref={elementRef}></readability-nav>
            </header>
            <main>
                <div role='region'
                     className='main__intro'
                     aria-label='Intro'>
                    <div className='text-content'>
                        <p className='quote'>Helping to reduce the gap between Design and Development</p>
                    </div>
                </div>


                <div role='region'
                     className='main__doing'
                     aria-label="what I'm doing">
                    <h3 className='heading'>What I'm Doing</h3>
                    <div className='text-content'>
                        <ul>
                            <li>
                                Working as a <em>Frontend Developer</em> role into a scrum-team,
                                implementing the <em>Design Language System</em> of an enterprise solution
                                into <em>Angular</em> components.
                            </li>
                            <li>
                                Updating my Usability and Accessibility concepts <a
                                href="https://www.interaction-design.org/dario"
                                title="Read more about what I'm learning [open in new tab]"
                                target="_blank">learning UX Design</a>.
                            </li>
                            <li>
                                Creating a <a href="https://github.com/dariobrozzi/sass-gadgets/packages"
                                              title="Check SASS Gadgets library package [opens into a new tab]"
                                              target="_blank">SASS
                                Gadgets library</a> as personal project and using new SASS modules.
                            </li>
                            <li>
                                Doing some <a href="https://github.com/dariobrozzi/website"
                                              title="Check this code on Git [opens into a new tab]" target="_blank">readability
                                experiments</a> with Stencil.js.
                            </li>
                        </ul>
                    </div>
                </div>

                <div role='region'
                     className='main__love'
                     aria-label='What I Love to Do'>
                    <h3 className='heading'>What I Love to Do</h3>
                    <div className='text-content'>
                        <ul>
                            <li>
                                Create accurate libraries from a <em>Design Language System</em>,
                                document and implement it into projects.
                            </li>
                            <li>
                                Help to improve Design-to-Code working flow.
                            </li>
                            <li>
                                Mentoring in <em>CSS</em> / <em>SCSS (SASS)</em>.
                            </li>
                        </ul>
                    </div>
                </div>

                <div role='region'
                     className='main__expectations'
                     aria-label='What I Love to Do'>
                    <h3 className='heading'>What are My Expectations</h3>
                    <div className='text-content'>
                        <ul>
                            <li>
                                Work-to-Live &mdash;
                                having a balanced healthy life.
                                Spending time to do sport, learn, and rest well.
                            </li>
                            <li>
                                100% Remote and Anywhere &mdash;
                                I've worked many years as a <em>freelancer</em> from different locations.
                                A fancy office with PlayStation and free coffee... doesn't attract me at all.
                            </li>
                            <li>
                                Quality &mdash;
                                improve software using standards and useful methodologies.
                            </li>
                            <li>
                                Team Flexibility &mdash;
                                for decide without micromanagement.
                            </li>
                            <li>
                                Help &mdash;
                                build a product/service that could help the community.
                            </li>
                        </ul>
                    </div>
                </div>

                <picture className='legos'>
                    <img src={legos}
                         alt="Keywoard with funy starwars legos"/>
                </picture>
            </main>

            <footer className='footer'>
                <div className='footer__section'>
                    <img className='footer__avatar__img'
                         src={profile}
                         alt="Dario Brozzi"/>
                </div>
                <div className='footer__section'>
                    <a className='badget badget--linkedin'
                       href="https://www.linkedin.com/in/dariobrozzi/?locale=en_US"
                       title="Check my profile on LinkedIn [opens into a new tab]"
                       target="_blank">
                        <span>Linkedin Profile</span>
                    </a>
                </div>
                <div className="footer__section">
                    <a className='badget badget--git'
                       href="https://github.com/dariobrozzi/website"
                       title="Check this code on Git [opens into a new tab]"
                       target="_blank">
            <span className="badget__text">
              Git Repository
            </span>
                    </a>
                </div>
                <div className="footer__section">
                    <a className='badget badget--lib'
                       href="https://github.com/dariobrozzi/sass-gadgets/packages"
                       title="Check my sass library I used to build this page [opens into a new tab]"
                       target="_blank">
            <span className="badget__text">
              Sass-Gadgets Library
            </span>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default IndexPage
