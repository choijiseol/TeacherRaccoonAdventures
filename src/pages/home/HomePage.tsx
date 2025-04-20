import Flex from "../../common/components/Flex.tsx";
import styled from "styled-components";

export default function HomePage() {
    return <HomeFlex>
        <TitleFelx center>
            <img src="/assets/img/homeImg/home_title.svg" width={600}/>
        </TitleFelx>
        <StartButtonFlex>
            <img src="/assets/img/homeImg/home_start.svg" width={100}/>
        </StartButtonFlex>
    </HomeFlex>
}

const HomeFlex = styled(Flex)`
    width: 100%;
    height: 100%;
    background-image: url('/assets/img/homeImg/home_back.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;


const TitleFelx = styled(Flex)`
    
`;

const StartButtonFlex = styled(Flex)`
        
`;