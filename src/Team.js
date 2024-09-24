


function Team({ team }) {
    return (
        <div className={`flex w-[340px] flex-col text-[#2a2a41] m-4 py-3 shadow-dollafade`} style={{ backgroundColor: team.backgroundColor }}>
            <div className="flex flex-row items-center h-[50px] p-3 leading-tight ">
                <img className="image-pixelated h-[32px]" src={`./pokemon/${team.teamPokemon}`}></img>
                <div className="text-[45px] mt-3 mx-4">{team.name}</div>
                <img className="flex ml-auto image-pixelated image-sway" src={`./${team.type}`}></img>
            </div>

            {team.players.map(p => {
                return (
                    <div className="block flex flex-row items-center mx-3 mt-2 mb-1 p-3 shadow-dollafade" style={{ backgroundColor: team.secondary }}>
                        <div className="w-[70px] h-[70px] p-[6px] flex items-center justify-center  shadow-dollafade" style={{ backgroundColor: team.backgroundColor }}>
                            <img className="h-[60px] py-auto image-pixelated" src={`./pokemon/${p.pokemon}`}></img>
                        </div>
                        <div className="flex flex-col ml-4">
                            <span className="text-[50px] leading-[30px] mt-2 ">{p.name}</span>
                            <span className="text-[30px] leading-[25px] " style={{ color: team.textAccent }}>{p.game}</span>
                        </div>

                    </div>
                )
            })}
        </div >
    );
}

export default Team;
