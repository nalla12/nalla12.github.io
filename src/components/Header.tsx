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
                toolTip='Change to Danish'
            >
                DA
            </SmallButton>
            <SmallButton
                highlight={props.lang === 'en'}
                onPress={() => props.changeLang('en')}
                toolTip='Change to English'
            >
                EN
            </SmallButton>
            <h1 className='my-3 text-3xl sm:text-4xl lg:text-5xl text-secondary'>aldu</h1>
        </div>
    </header>)
}
