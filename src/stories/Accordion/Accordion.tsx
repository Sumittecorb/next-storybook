import React, { useMemo, useState } from 'react';

const faq = [
    { key: "1", question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible." },
    { key: "2", question: "Can I change my plan later? ", answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you." },
    { key: "3", question: "What is your cancellation policy?", answer: "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid." },
    { key: "4", question: "Can other info be added to an invoice?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { key: "5", question: "How does billing work?", answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces." },
    { key: "6", question: "How do I change my account email?", answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop." },
]

interface AccordionProps {
    design?: 'simple' | 'medium' | 'upper'
}


const getBackgroundClass = (design: string) => {
    switch (design) {
        case 'simple': {
            return 'bg-white border border-gray-700 text-black';
        }
        case 'medium': {
            return 'bg-white';
        }
        default: {
            return 'bg-sky-700 border border-sky-700 text-gray-200';
        }
    }
};
export const Accordion = ({ design = 'simple', ...props }: AccordionProps) => {
    const [isAccordion, setIsAccordion] = useState("");
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const computedDesignClasses = useMemo(() => {
        const backgroundClass = getBackgroundClass(design);
        return [backgroundClass].join(' ');
    }, [design]);
    return (
        <>
            <div className='w-full border-2 border-gray-700 p-5 rounded-xl bg-gray-200'>
                {
                    faq.map((data) => {
                        return (
                            <>
                                <div className={`${computedDesignClasses} mb-5 rounded-xl`}>
                                    <button className='w-full h-fit p-5 flex justify-between'
                                        onClick={() => { setIsAccordion(data.key); setFirst(!first) }}>
                                        <h3 className='text-left w-[calc(100%-32px)]'>{data.question}</h3>
                                        <div className='ml-3 h-7 w-7'>
                                            <img src={isAccordion == data.key && first ? "https://cdn-icons-png.flaticon.com/512/1828/1828906.png" : "https://cdn-icons-png.flaticon.com/512/262/262038.png"}
                                                className={isAccordion == data.key && first ? 'w-full h-full transition-all duration-1000' : 'w-full h-full transition-all duration-1000'}
                                            />
                                        </div>
                                    </button>
                                    <div className={isAccordion == data.key && first ? 'h-fit transition-all duration-1000 px-5 pb-5' : 'h-0 overflow-hidden transition-all duration-1000 px-5'}>
                                        <p>{data.answer}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            {/* //////////////////////////////////////////////////////////////// */}
            {/* <div className='w-full border-2 border-black mb-5 p-5'>
                <div className='bg-black text-white p-5 mb-5'>
                    <button className='w-full text-left h-fit' onClick={() => { setFirst(!first); setSecond(false) }}>Question1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dicta doloremque omnis dolorem facere esse ratione qui maiores quidem dolores ipsa, sed, fugiat placeat explicabo alias, consectetur cum eligendi enim? ?
                    </button>
                    <div className={first ? 'h-[200px] transition-all duration-1000 mt-5' : 'h-0 overflow-hidden transition-all duration-1000'}>
                        <p>
                            Answer1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga pariatur, facilis vero autem tempore exercitationem praesentium incidunt est fugiat dolore, magni nulla harum accusamus explicabo nesciunt et quae assumenda.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta magnam incidunt cumque nostrum, eligendi nam delectus qui mollitia exercitationem obcaecati. Quae in eligendi ratione quis totam assumenda cupiditate tempore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium fugit labore eligendi optio dolore in facere natus! Iure excepturi facilis architecto officiis quasi autem odit ullam possimus. Rerum, accusantium?
                        </p>
                    </div>
                </div>
                <div className='bg-black text-white p-5'>
                    <button className='w-full text-left h-fit' onClick={() => { setSecond(!second); setFirst(false) }}>Question1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum dicta doloremque omnis dolorem facere esse ratione qui maiores quidem dolores ipsa, sed, fugiat placeat explicabo alias, consectetur cum eligendi enim? ?
                    </button>
                    <div className={second ? 'h-[200px] transition-all duration-1000 mt-5' : 'h-0 overflow-hidden transition-all duration-1000'}>
                        <p>
                            Answer1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga pariatur, facilis vero autem tempore exercitationem praesentium incidunt est fugiat dolore, magni nulla harum accusamus explicabo nesciunt et quae assumenda.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta magnam incidunt cumque nostrum, eligendi nam delectus qui mollitia exercitationem obcaecati. Quae in eligendi ratione quis totam assumenda cupiditate tempore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, accusantium fugit labore eligendi optio dolore in facere natus! Iure excepturi facilis architecto officiis quasi autem odit ullam possimus. Rerum, accusantium?
                        </p>
                    </div>
                </div>
            </div> */}
        </>
    );
};