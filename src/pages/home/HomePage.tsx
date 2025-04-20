import Flex from "../../common/components/Flex.tsx";
import styled from "styled-components";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

export default function HomePage() {
    const navigate = useNavigate();

    return <HomeFlex>
        <Header/>
        <TitleFelx center>
            <img src="/assets/img/homeImg/home_title.svg" width={600}/>
        </TitleFelx>
        <StartButtonFlex center>
            <StartImg src="/assets/img/homeImg/home_start.svg" onClick={() => navigate('/play')}/>
        </StartButtonFlex>
    </HomeFlex>
}

const Header = () => {
    const [showVolumeBar, setShowVolumeBar] = useState(false);
    const [volume, setVolume] = useState(100); // 기본값 100%

    useEffect(() => {
        const savedVolume = localStorage.getItem("volume");
        if (savedVolume !== null) {
            setVolume(Number(savedVolume));
        }
    }, []);

    const handleVolumeChange = (e: { target: { value: any; }; }) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        localStorage.setItem("volume", String(newVolume));
        const audio = document.getElementById("main-audio");
        if (audio) {
            audio.volume = newVolume / 100;
        }
    };

    return (
        <HeaderFlex flexEnd verticalCenter>
            <SoundFlex row gap={10}>
                {showVolumeBar && (
                    <VolumeBarContainer center>
                        <VolumeBar
                            type="range"
                            min="0"
                            max="100"
                            $volume={volume}
                            onChange={handleVolumeChange}/>
                    </VolumeBarContainer>
                )}
                <SoundIcon
                    src="/assets/img/icon/sound.svg"
                    onClick={() => setShowVolumeBar(!showVolumeBar)}
                />
            </SoundFlex>
        </HeaderFlex>
    );
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
    height: 100%;
`;

const StartButtonFlex = styled(Flex)`
    width: 100%;
    position: absolute;
    bottom: 40px;
`;

const StartImg = styled.img`
    width: 200px;
    cursor: pointer;
    transition: width 0.5s ease;
    
    &:hover {
        width: 230px;
    }
`;

const HeaderFlex = styled(Flex)`
    position: absolute;
    width: 100%;
    height: 70px;
`;

const SoundFlex = styled(Flex)`
    margin: 0 20px;
`;

const SoundIcon = styled.img`
    cursor: pointer;
    width: 50px;
`;

const VolumeBarContainer = styled(Flex)``;

const VolumeBar = styled.input<{$volume: number}>`
    width: 200px;
    appearance: none;
    height: 25px;
    border-radius: 100px;
    background: linear-gradient(to right, #2d4732 ${props => props.$volume}%, #ffffff ${props => props.$volume}%);
    outline: none;
    cursor: pointer;

    &::-webkit-slider-thumb {
        appearance: none;
        width: 25px;
        height: 25px;
        background: transparent;
        cursor: pointer;
        border: none;
    }
`;

