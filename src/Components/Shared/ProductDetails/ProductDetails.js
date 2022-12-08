import React from "react";

const ProductDetails = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-3">
        <img
          src="https://i.ibb.co/jGNwZ14/apple.png
"
          className=" rounded-lg shadow-2xl"
          alt=""
        />
        <div className="p-4">
          <h1 className="text-4xl font-bold">iPhone Pro <span className="text-xl text-blue-800 font-semibold font-mono">(Released on 17 may 2022)</span> </h1>
          <p className="text-green-700 text-xl font-mono"><span className="font-bold">Price: </span>230 $</p>
          <div className="divider m-0"></div>
          <div>
            <h1 className="text-lg font-bold underline font-mono">Phone Details</h1>
            <ul className="text-md">
              <li>
                <span className="font-semibold text-md">Body: </span>{" "}161.5x73.9x7.8mm, 173g; glass front, plastic frame, plastic back.
              </li>
              <li>
                <span className="font-semibold text-md">Display: </span>6.70" AMOLED, 1B colors, HDR10+, 120Hz, 800 nits, 1080x2412px resolution, 20.1:9 aspect ratio, 394ppi.
              </li>
              <li>
                <span className="font-semibold text-md">Chipset: </span>MediaTek Dimensity 1080 (6 nm): Octa-core (2x2.6 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55); Mali-G68 MC4.
              </li>
              <li>
                <span className="font-semibold text-md"> Memory: </span>128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM. 
              </li>
              <li>
                <span className="font-semibold text-md">Software: </span>OS/ Android 13, Realme UI 4.0.
              </li>
              <li>
                <span className="font-semibold text-md">Rear camera:</span> Wide
                (main): 108 MP, f/1.8, 24mm, 1/1.67", 0.64µm, PDAF; Ultra wide
                angle: 8 MP, f/2.2, 16mm, 112˚; Macro: 2 MP, f/2.4.
              </li>
              <li>
                <span className="font-semibold text-md">Misc:</span> 67W
                SuperVOOC charging, PD3.0, 50% in 17 min (advertised).
                Fingerprint reader (under display, optical); NFC; stereo
                speakers.
              </li>
              <li>
                <span className="font-semibold text-md">Battery: </span>
                5000mAh
              </li>
            </ul>
          </div>

          <button className="btn btn-primary btn-sm mt-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
