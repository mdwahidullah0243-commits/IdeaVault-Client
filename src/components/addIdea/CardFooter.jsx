import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";


const CardFooter = ({ step, setStep, next, setIsPublishIdea }) => {
    return (
        <div className="border-t-[0.5px] border-[#ffffff14] py-4 px-7 mt-5 flex justify-between items-center">
            {/* footerLeft */}
            <FooterLeft step={step} setStep={setStep} />

            {/* footerRight */}
            <FooterRight step={step} next={next} setIsPublishIdea={setIsPublishIdea} />
        </div>
    );
};

export default CardFooter;