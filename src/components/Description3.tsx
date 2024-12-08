import Image from 'next/image'

export default function Descrit3() {
  return (
    <div className="relative">
      {/* Group 110 */}
      <div className="absolute w-full bg-white top-[1031px]">
        {/* Line 8 */}
        <div className="absolute w-full border-t border-[#D9D9D9] top-0"></div>

        {/* Group 105 */}
        <div className="absolute flex items-center w-full md:w-[649px] h-[36px] left-[5%] md:left-[396px] top-[48px]">
          <div className="text-black text-[20px] md:text-[24px] leading-[36px]">Description</div>
          <div className="ml-4 md:ml-8 text-[#9F9F9F] text-[16px] md:text-[24px] leading-[36px]">Additional Information</div>
          <div className="ml-4 md:ml-8 text-[#9F9F9F] text-[16px] md:text-[24px] leading-[36px]">Reviews [5]</div>
        </div>

        {/* Group 108 */}
        <div className="absolute left-[5%] md:left-[207px] top-[152px] w-[90%] md:w-[1026px]">
          <p className="text-[#9F9F9F] text-[14px] md:text-[16px] leading-[24px] text-justify">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] text-[14px] md:text-[16px] leading-[24px] text-justify mt-4">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class...
          </p>
        </div>

        {/* Group 109 */}
        <div className="absolute flex flex-wrap justify-center md:justify-between w-[90%] md:w-[1239px] left-[5%] md:left-[100px] top-[362px] gap-4">
          {/* Left Image */}
          <div className="relative w-full md:w-[605px] h-[348px] bg-[#FFF9E6] rounded-[10px] overflow-hidden">
            <Image
              src="/Group 107.png" // Replace with your actual image path
              alt="Cloud Sofa Three Seater"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-full md:w-[605px] h-[348px] bg-[#FFF9E6] rounded-[10px] overflow-hidden">
            <Image
              src="/Mask group.png" // Replace with your actual image path
              alt="Cloud Sofa Three Seater with Ottoman"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
            />
          </div>
        </div>
      </div>

      {/* Line 9 */}
      <div className="absolute w-full border-t border-[#D9D9D9] top-[1775px]"></div>
    </div>
  )
}

