import Feed from "@/components/Feed";

const Home = () => {
    return(
        <section>
            <div className="w-full flex-center flex-col">
                <h1 className=" head_text text-center">Harry Potter & The Wizard</h1>
                <br className="max-md:hidden"/>
                <span className="text-center">Get the latest on Harry and spells</span>
            </div>
            <Feed/>
        </section>
    )
}
export default Home;