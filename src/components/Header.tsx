import SmallButton from './SmallButton.tsx';

export default function Header() {
    return (<header>
        <div className='text-right'>
            <SmallButton>DA</SmallButton>
            <SmallButton>EN</SmallButton>
            <h1 className='mb-3 text-3xl md:text-5xl lg:text-6xl text-secondary'>aldu</h1>
        </div>
    </header>)
}
