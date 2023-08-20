import Image from 'next/image'
import Link from 'next/link'

type ColumnProps = {
    title: string;
    links: Array<string>
}

const FooterColumn = ({title, links}:ColumnProps) => (
    <div className='footer_column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {links.map((link) => <Link href='/' key={link}>{link}</Link>)}
        </ul>
    </div>
)

const Footer = () => {
  return (
    <footer className='flexStart footer'>
        <div className='flex flex-col gap-12 w-full'>
            <div className='flex items-start flex-col'>
                <p className='logo_text ml-5'>Harry Potter</p>
                <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                    Harry Potter is a world's best selling author since early
                    2000.
                </p>
            </div>
        </div>
        <div className='flexBetween footer_copyright'>
            <p>@ 2023 Harry Potter. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer