import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaceIcon from '@mui/icons-material/Place';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Groups';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Typography } from '@mui/material';
import Link from 'next/link';

export default function Infos({ dados }: any) {
    return (
        <div className="border-b ">
            <div className="  flex justify-center gap-2 p-5 text-[#0A5495] sm:gap-20 ">
                {/* <div className="flex w-40 flex-col items-center justify-center rounded-md border-2 border-[#08559C] hover:bg-[#08549c1d]  sm:w-64">
                    <div className=" ">
                        <FormatListBulletedIcon className="text-4xl sm:text-6xl " />
                    </div>
                    <Typography className="text-center text-xs">
                        Classificação Sub-20 Masculino
                    </Typography>
                </div> */}

                <Link href={'/sumula'}>
                    <div className="flex w-40 flex-col items-center justify-center rounded-md border-2 border-[#08559C] hover:bg-[#08549c1d] sm:w-64">
                        <div>
                            <DescriptionIcon className="text-4xl sm:text-6xl" />
                        </div>
                        <Typography className="text-center text-xs">
                            Súmula
                        </Typography>
                    </div>
                </Link>

                {/* <div className="flex w-40 flex-col items-center justify-center rounded-md border-2 border-[#08559C] hover:bg-[#08549c1d] sm:w-64">
                    <div className="">
                        <EqualizerIcon className="text-4xl sm:text-6xl " />
                    </div>
                    <Typography className="text-center text-xs">
                        Estatísticas da partida
                    </Typography>
                </div> */}
            </div>
        </div>
    );
}
