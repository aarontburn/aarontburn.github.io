import { NavButton, Spacer } from "../../../components/Components";

const FONT_SIZE: string = '1.2em';

export function Header({ changePage }: { changePage: (v: any) => void }) {
    return <>
        <div id='header'>
            <NavButton displayText="Nexus" callback={() => changePage('/nexus')} fontSize={"1.5em"} />

            <Spacer size="5em"/>

            <NavButton displayText="About" callback={() => changePage('/nexus/about')} fontSize={FONT_SIZE} />
            <NavButton displayText="Download" callback={() => changePage('/nexus/download')} fontSize={FONT_SIZE} />
            <NavButton displayText="Module Marketplace" callback={() => changePage('/nexus/marketplace')} fontSize={FONT_SIZE} />
            <Spacer />

        </div>

    </>
} 