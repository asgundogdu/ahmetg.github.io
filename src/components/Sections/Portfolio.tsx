import { FC, memo} from 'react';

const Portfolio: FC = memo(() => {

    return (
            <div className="flex flex-col gap-y-8">
                <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
                <div className=" w-full columns-2 md:columns-3 lg:columns-4">
                </div>
            </div>
    );

});

Portfolio.displayName = 'Portfolio';
export default Portfolio;