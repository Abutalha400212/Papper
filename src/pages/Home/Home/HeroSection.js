import React from 'react';

const HeroSection = () => {
    return (
        <div className='grid justify-items-center text-center gap-y-1 mt-20'>
            <h1 className='text-4xl text-black font-bold max-w-md'>Save more and get your finances right</h1>
            <p className='text-md text-gray-600  max-w-md'>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
            <button className='btn btn-primary w-40 text-white mt-5 '>Request a demo</button>
            <div className='my-14 w-[100%] mx-auto'>
                <img src="https://s3-alpha-sig.figma.com/img/9079/1e0e/5271a2a687af34768322c220ce70f9a6?Expires=1673827200&Signature=EpnIbIVpFQDHRRNjCt-9bMobkZkC6aSGhA1pi2OSFuFbDD-56VEAFc8IGsAjG6dHcOIuAdmdDcoEtk9nF5M5D5OCBQgpsDGo1Q5g6L7jMiG45USqSiLrNsfR6tfD6JZAM~UbIFqupjELn5LWHQkoMLCmYQVvV4pKTQh9lEOpQcveDBTqcmuiiH8ibAOZ5mRIMzzpjN2fWRvqBqN1cw68rT77C5J4gozWtFud3oYSfzkUkFqCFDKi97v24tbPqr50aWKs~l7v6wdmGPZGvkzT-gCTSCdOfGNrVt1DvKGlXrONEXV8Uw1-XHeWoTeiTpgvASi8X8r27ti-YEhfCx5cKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;