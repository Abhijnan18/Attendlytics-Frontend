import React from 'react';

interface UnderstandUniverseProps {
    // You can add props if needed, e.g. dynamic text
}

const UnderstandUniverse: React.FC<UnderstandUniverseProps> = () => {
    return (
        <div className="bg-black text-white min-h-screen px-8 py-16">
            <div className="max-w-4xl mx-auto">
                {/* "Our Mission" Section */}
                <div className="mb-4">
                    <h2 className="text-sm uppercase tracking-widest text-gray-400">
                        Our Mission
                    </h2>
                    <h1 className="text-4xl font-bold mt-2">
                        Understand the Universe
                    </h1>
                </div>

                {/* "About xAI" Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">
                        About xAI
                    </h3>
                    <p className="leading-relaxed text-gray-200">
                        xAI is a company working on building artificial intelligence to
                        accelerate human scientific discovery. We are guided by our mission
                        to advance our collective understanding of the universe.
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-200">
                        Our team is led by Elon Musk, CEO of Tesla and SpaceX. Collectively,
                        our team contributed to some of the most widely used methods in the
                        field, in particular the Adam optimizer, Batch Normalization Layer,
                        Layer Normalization, and more. Our ultimate goal is to further
                        innovate these techniques and apply them in the real world.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnderstandUniverse;
