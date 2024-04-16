import SmallButton from '@/components/SmallButton.tsx';

interface Props {
    lang: string,
    changeLang: (lang: 'da' | 'en') => void
}
export default function Header(props: Props) {
    return (<header>
        <div className='text-right'>
            <SmallButton
                highlight={props.lang === 'da'}
                onPress={() => props.changeLang('da')}
                toolTip={props.lang === 'da' ? 'Change to Danish' : 'Skift til dansk'}
            >
                DA
            </SmallButton>
            <SmallButton
                highlight={props.lang === 'en'}
                onPress={() => props.changeLang('en')}
                toolTip={props.lang === 'da' ? 'Change to English' : 'Skift til engelsk'}
            >
                EN
            </SmallButton>
            <h1 className='my-3 text-3xl sm:text-4xl lg:text-5xl text-secondary'>aldu</h1>
        </div>
    </header>)
}
