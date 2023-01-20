import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'


const AboutMe = () => {

    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0]
        setVisible(entry.isIntersecting)
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <>
            <div className={ isVisible ? "fadeInTop" : "" }>
                <div id="aboutme_section" className="aboutme-page d-flex align-items-center row m-auto w-75">
                    <div ref={domRef} className="aboutme-section rounded">
                        <div>
                            <h2>About Me</h2>
                        </div>
                        <div>
                            <h5>Lorem Ipsumsfksdjflksdjflsdjflsad;fsda;flkjsdl;flkjsdlasdf
                                as;ldkfjasdlkjf;asdkjf;sadkf;sadkfjas;dlkfjsad;ldkfjasdlkjfasdlfj
                                asd;lfkjsad;fkjsad;kfjsad;kfjsd;akljf;sdakljf;dskjfk;dslafj
                                ;asdlkjfldsk;ajfk;ldsajf;kldsajf;lkdasjf;lasdjfl;dsaf;asdlkfj;dsaf;
                                a;sldkfj;sadlkfj;sadkfjasd;lkfjsd;kljfdsa;kfjdsk;jfsd;kfjsdlk;
                                ;laskdjf;lksdajfkl;jk;lsdf;ljk.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;