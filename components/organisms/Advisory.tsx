import { Heading } from "@/components/atoms/Heading";
import { Icon } from "@/components/atoms/Icons";
import { Text } from "@/components/atoms/Text";
import { StatItem } from "@/components/molecules/statItem";

const Advisory = () => {
    return (
        <section className="py-16 bg-white mx-8 max-w-7xl px-6 lg:px-12">
            <Heading level={2} className=" mb-12 text-4xl lg:text-5xl text-[#0A1435] text-start">
                Core Advisory Pillars
            </Heading>
            <div className="grid  lg:grid-cols-[70%_30%] md:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 px-15 rounded-lg shadow-md">
                    <div >
                        <Icon name="" />
                    </div>
                    <Heading level={3} className="text-2xl text-[#0A1435] mb-4">
                        Multi-jurisdictional Planning
                    </Heading>
                    <Text className="text-gray-600 text-justify">
                        Optimizing cross-border structures to mitigate double taxation and leverage international treaties. We provide structural clarity in an increasingly fragmented regulatory landscape.
                    </Text>
                    <div className="mt-4 p-8 ">
                        <ol className="list-disc list-inside space-y-1">
                            <li className="mb-2 text-gray-600 text-justify">
                                BEPS Compliance
                            </li>
                            <li className="mb-2 text-gray-600 text-justify">
                                Treaty Optimization
                            </li>
                            <li className="mb-2 text-gray-600 text-justify">
                                Permanent Establishment Risk
                            </li>
                        </ol>

                    </div>
                </div>
                <div className="bg-[#0A1435] p-10 rounded-lg shadow-md">
                    <Heading level={3} className="text-2xl text-white mb-4">
                        R&D Credits
                    </Heading>
                    <Text className="text-[#abceef] text-left leading-8">
                        Unlocking non-dilutive capital through rigorous optimization of research and development tax incentives across various global regions.
                    </Text>

                    <a
                        href="#casestudies"
                        className="mt-6 inline-block px-6 py-3 bg-white text-[#0A1435] rounded-lg font-semibold hover:bg-gray-100 transition">
                        Case Studies
                    </a>
                </div>
            </div>

            <div className="grid  lg:grid-cols-[30%_70%] md:grid-cols-2 gap-12">
                <div className="bg-gray-50 px-15 rounded-lg shadow-md p-5 border-1 border-gray-400">
                    <div >
                        <Icon name="" />
                    </div>
                    <Heading level={3} className="text-2xl text-[#0A1435] mb-4">
                        Risk & Compliance
                    </Heading>
                    <Text className="text-gray-600 text-justify">
                        Institutional-grade audit preparation and risk mitigation strategies to ensure absolute adherence to shifting compliance standards.
                    </Text>
                </div>
                <div className="flex items-center gap-10 bg-gray-50 rounded-lg shadow-md p-10 ">
                    <div className="">
                        <StatItem value="$4.2B" label="" />
                    </div>
                    <div className="">

                        <Heading level={3} className="text-2xl text-[#0A1435] mb-4">
                            AUM Advised
                        </Heading>
                        <Text className="text-gray-600 text-justify">
                            Track record of safeguarding assets for multinational corporations and family offices.
                        </Text>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Advisory;