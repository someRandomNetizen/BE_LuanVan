import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { user, userDocument } from './common/schemas/user';
@Injectable()

export class userService {
  constructor(
    @InjectModel(user.name) private readonly userModel: Model<userDocument>){}
    async create(user_name: string, password: string, full_name: string, phone_number: string, birth: Date, gender: string, nick_name: string, avatar: string, wallet_money: number, role: string, login_type: number, login_id: string, user_id: number){
        if (!user_name){
        user_name = "";
        }
        if (!password){
        password = "";
        }
        if (!gender){
        gender = "";
        }
        if (!avatar){
        avatar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAAG4CAMAAAAAFAKBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAALEsAACxLAaU9lqkAAAIKUExURUdwTHGKwXCHv3GJwXB/v3CIv3CHv3CHv3GIv3GJv3GIwHGIv3GKwnGHv3CIv3CJwXCIwHCPv3CFv3KIwHKHwHGHv3CJv3CGv3CGv3GLwnCHv3KJv3GJv3CIwHGIwXCKv3KJv3CHv3GIwHCHv3OMxXCJv3CHwXCJv3GIv3GIv3CJv3KJwXGHwHCJv3CJwXKJwXGJv3GHv3KIv3KHv3KJwHGIwnGHvnGHv+3v8XGIv9PT04GVxc7V5N3i6t7i63mPwniPwr/I3ubo7tbX14CVxZ+u0ers7a+72JChy87V5bfC25+u0uXo7d3i65Ciy6+7177I3qi11evt76Cv0tTU1OXo7q+82JCizLbC26e11eDh4t7f4ImbyNbc56+818fO4ZiozpChzMbO4YibyNXc59na2ubo6dbc6MbO4tzd3uHj5L/I3+Pk5ae01IGVxomcyKe11Ozu7+fp64ibydjZ2ejq6+Hi45eoz5ioz6Cv0dTV1enr7dbW1t/g4ODh4ZenzuLj5Nvc3N3e3tze3tfY2OXn6OPl5ubo6sfJ0b7I3dXb59Xc6Nna27bC2tra29rb3Ofo6sfP4crN1d/h4eTm54mbyb7D0r/G07K60Ki00Z6t0Jeozpipz7fB28nL08zU4sbP4dHW4snQ38XN38TI09bZ4rvAztTX4LW907O80a230KSx0aKwz6+40Wns1DcAAAA4dFJOUwBvYF8Qv0Ag3++/vz/vn3+fEDCfr4B/cFBPgH/Pv28wr4/frx9Qj3BvkI+Pz8+Pf1/Pn6+vT6CgMow81QAAFzRJREFUeNrtnelfG2eSx1sgoRaXMBAbzxjfdrJOsjuZvfpBNyCExCkwBgMOYDuxvY4dz/g+srYzYyeTa5PMzrn3ff+PKw6DwAL18VQ9Vd3P753fmFJ9P3U99XS3YfhD4WhTT0M83tHR3fvO8YrEpmKVf/X29nZ0xOMNPU3RsKFFgldP6HRH7/GYsK/jvd3xUFOnJqhGFWId7xwXHhTr7Qj1dGpP4kXZKrKYkKV3ukNNOvrgmXUfFwAye+OaHpA6Qx0gzKpjr1FnTtnQumMCRbHukIYnqQtBg7YFrzGq/e6tpjWdPi6UyOxq0u53Sy3UHBMqpQPPVYJsFgTUq9k5irU3SFDb6DVDmp3dDCmIScedjW6EHLVX9U7D2V1Np2OCrMwuPeBxSZGvlbtGfSzGKtiqZvMuXe2qdapZsFGvrnabzX9MsJKpm8zVSfs0M2xrCnzGbGoWTBVodHyxrRW7Jo1No9PYNDqNTaPzL7ZAtSnRLuEzBQIdu3Hblt72Pbo3/Yht7TTF38XNFL6Vj9FFm4Wv5dNS58/itl0/0FlS50si4fYnIiDyV758MyYCIx8Fnd+bkp2KRHW48VTbAR1uOuh0uOmg0+Hm9/ayJyYCLLbtZfgPVLjr5spIuXT9arE4tqZisXi9VBhZualkZ8AzTWIfldwcKV0ds3bVl1cL929jB11UdyV7KjN7rthv2VB/sbCiexQiafJ22R60TRXLiJH3dlinyVqaLY1ZLpTOreh0+boakNLkr871W66VLiWQ0iWb7hInTWbKRcujitN6TVdV3lCG7oyXYKtOmShhx+EEDKW8zeYsaUJBR7/QYRyWzBYtqcJA19ZDm9sb8C5ISMaGhe4HwW5LMiULRAjo3g5yW1Lut4CUPg9u/HvhoLYls1csQKUTwWxRwLlBZckt/V02gOSOQLeTs2kLXOlh6OaS3NuJGtiH27oK0OmS2PnXm9AzwBULSeCVjtRYAD2+TfdbaJqZDg45aG4lC1WFoJAD5pYpWshKJgJBDphbIm2hKx0EcsDcFvstBUpf8j25P/dPW7KtRXkI+7t+7PN4m7aU6byvYw6Y2zlLoQo+Judnbn4m529u/s2W/q1vr/TQl+SAuc1aBAS8LVByQR14H5DopwBuBnieU7ArOOK/8xIVZyjo+7ko7N40Q4SbZV2G3Yq3Ie/Eoe8p5CwymvTTbYYwMLdzFiEBDwUm5t2v9wLQUKK1lhHf3HtNpGmBg25Q3vbJACeWLGJK+mMl3gP8M8oWOQGXOdHjg0FAJOhxs2aAkyXGUAB+YTlNEBx4skRoLZuDlygxkmWEe2NC44gSP1lCt5bQN80pHZls10XoX97IuTERDyyyAn8eBLBBCYM/AZemC+6y4NuggD8pPG0RFnR/AlfmoB/JIR1wlf4E+rFHqIU4eIGjOgpgPQwCVebAC1wiTRscfMiBlDn4V2FMW1bAQw6izIFPcMQrHE7IyT9uRnhFF/mAQ2gs5Ze5Lh1wqytVeC9EuE0ClA9N8I5PZM8EUYR34n3HAVxS8EqWCO8OTVgslGWVLBESJa0beSonAonJEiNRcmhN1iYCwShZYrxkedZiIoT2RFayRBi9CS9Qd2pOcEmWOB9/SHMBh5ErRVuYx+jNKFPi5Erxx0wSJZ9MiZQrRRP9ZQ6vTGlZYygO8bzgeQPFzI8tRsL5JE/cY2eCYiSHxQDmikDCMNeFA+47TuAu4vgkQr8zEaKfE7gZJKc0ke9MeJU4rCInTPoBN80L3AiSWw7QPjPhNcWtKofkFtfnJ2gfqL3CC9wXWH6Jkx4FKuLFDa07cTsSdGHZx6w3QetOhOiiHXAPuIEbQXNNE+WAEwVu4M6jucbFFN6EZhy3phKvrXQVcs14xhW5gUsKuiGHGHBijBu4MUE35BADjts0UJEgG3KYAZfhBy5LNuQwA+5jfuASVEMOM+A4XRRCvTDkJuSaNbg99VTQDLkopl1ihB+4EUEz5Lo0OErgIjQDToOrqyjJgNPg6uo0yYDT4GStwhs0OGLgbK7CTQ2OGrg2igGnwdnQQWrDtwYnbSLAbk0Y3lxAPvKyOYR3odukzyplTAT7Yug2JfiBu4TupLoTAXprwhJcFt9Lh+uAO4Rvkt6AS2hPOhWYpO+cSGhPulSYdIUbuKQKL50mdWqyJnb3Ki+q8NKe7UmDCov43WQuCGq5sluJReyOTp4qcVOE0qnJmthd87qkxk9hYpmS38VKNW7aY5RrVmQRs3ngC0VuihDLlOzayouq/LRbrgypMqjMC9x5VX6KEzru4tidDAtauVJZptRvFrKrk5R6ylUl9YGXh76yWZ1BZV3i3OdKhZmSV5G7pNBRYVqZklWRS6n002Ey55QbKvEBN6nST7VypUp7xLg+YXa722lSCi7DJlfOKPVTjd1Ol1qDcjpT2tJpGrtvhrnyqVo/mZSGAU59ZUq1n05SGgYY9ZWTqv10mNIwwChXDqr204kd4GKqDeJxXplU7qY2Ahdht2uZA7i8ej910tih8mpPUgTcdJhWiRMsPm9LIOB2FLkYAYvon56kBgm4qY1YieMQcpMk3NRJaYrjEXKDJNx0mFiJox9yX9PwUgeF+12cQi5FI+Cqjyv3CaFDrq4mqHgpTGQXVx1yKT3D1dfW22riZGwifHySJ+OkwxQu5rE5sbxIx0cnqCxRqzWoRwH73ck+QUjndGdiuztpomQUzf4kRclFm91JiJRV4zpR2u1OuklZRfESwwQtD3XQOjfZ1AWdKPfWIQp3mGt1lsROvkYHiTmojdJOp1oP9ei9t9bv6J0iZxetMjdBzz8HCTaV5A5QLhN0z3pb2UHQskEy01xqkKB7OqidVNJrUEYpcttoK2MUTaMyh/8NSeeY5E4qq3SLArdbRJ0TJjkNbOh93VDuOQ80CU2OG7e1eSAkNDlu3NbmgbjQ5LhxW3uiuFtocty4rQ1yzUKT48Zt7X0nJmkLVR04P6TtFZPgUmenFhWcfo1eIu6UNrrzt8pzS5Lnkzsn8Ch5G0VmCfkKZZa+T04Snr9VtSgTHDzSSnGNWuvIGS1dpoZZOOQgkWca6xe6SZ0mq9VI+uBkm/IIQTd6i4s34nzAIQRdclDwAdch+Ag26EbzjFzRwQocaNB9nRWswDULVhr8R6AseYmXH05wA1d5aBUgXyaHuXkhwg+c/FLHD9vqPS9TMFQ+GWxsq+sBluAqRymTQcbGGFylTZnwnDFHJ7Jcf71J9DqszT7FS9iNXhxm/NNNQ7BWNu9u5TOazGd5/3Lm4FbZLU86zJmpueEs+5/NH9xavcsv2Xz+OJW7kfDFT/YHuLXIGy/sTa/CbDnrm5/rH3DrWhzPF3JLyQup0Y1ilkoll3KF/HLCZz/UH+AyN1fu//5/fvff//nb3/z6X7//+88/Hzjb90oDn3/+/ff//uvf/Pa//u93//v7lZWbGQ1OOa77I4Xr//JP/3Hv2vMqUnvq7J2vFub/7Z//4XphZOW2BodN7HYF2JdjU3fvLTwf6HOls18t3Ptsqr94tXB/JaPBwSObLZeKlaeMpz68d80lsmrdeT7/2ZRl9RdLZW74+IC7OVK6Orbabzx+KYNZFb1rH91d/X8r+O7zyZ4szioz99fCbBXavWtn+wD05Pk6vDV6HGKvjTy4m+XrY+ud/dRLGGib8K69mFr/S19enaYeerS3AzfLV1+9NePxLz/oQ9BX9+5u/MH+q+XbGpyb9DhyffNVJx8uDPSh6cnCZ6/+bjo3nSAL7hBFs2bPFa0tamf7kPXk2iY768vSCkUPEbxzkpndCrVKhhzoU6InC4+trcC7TxBcN7EEWdyiNnXvgz6F+uqjqa0T6qvTGWLgOohSU5EiX1NVylxlRwgcoZvM1RlSdbBVpczqsOvPrdABR+Ohj1+dq35b3uNfnu0joyfXHleZls7R6DNJPK2TKRe3bTynBvpIaeAn28wrTpMAp/zBxtnSa6+m/OlZStweDe20j0DYNap+lHi2WOuWwUeUwD2rZaHqsDuo9OH9zLnd3gO7QIfb/C4mppWeqrQqfF3G7tgq+oAKtzu726gyY55U9oKaRGnPty4PEWlQBob2vO2nDF1Y0SuZE7l6FyA/pAHubj07FaFT8xK2+tgq+gvKBU41OlPFaw8zNr/j8TP13D61Zyk+ugj+9yL2bEmIzeE7Ju89VEBGt/qZ1D9E/YtlBx+CGFI8hz8asm9rGneuiyO/THv2iqPHav5aLbgXjoxNYx5AH0b9mFXC8bNsf0m9MVFV6lor4KIUsySBOfwb59bOnMfyZSfeJ1oWi26eHFXXoAwMubE3jRR0YazPt2fcft5b2aJgyKXBBQxubVjftl1Mu37GXtEc/sy1wRhBF0H68F/ZyzstlCwKPvFiMXzQdaB8ajNR9OIFa+rnCgqct/enXIYOusMYH7f9W6/fXsSfwweGPJoMPY6vf9wWdh6Q8IFh9EXBt95thk2XnQb0tzYTVywJQp7D52XYDJou17kBtpUeuslt+iuCK4G66RLu1aWHNsCBtZVlS5Iw53D7K4F6AjtHObEBDqqtPGdJE16D8mhIntVQhe7wBjiYtjIj9cXXaBf2Xsq0ehLuiBnsg9KZK5ZULTBqTKpaFJB3UIU3wEGcVibSlmShLAruyLYa4gDMfMUN4Bk5+dxQLuwNDFkMyJ3YBBdiwK2yKCBwGY8EufgmuFMcuCEsCuZBzJZOrnUT3D4W3MAv7H0CZLZscpu9ieTuJAPFDXhRIG/yfo2c1N7y0BY3uWcnVywwQc7hAI0JzFRwogqczO6kZAEKcFHwAtJumZN4YxW4TpLnXKiLgnlYuyWefnVWgZO32SlbwAKaw59D2/1Q7kUh2SN4oh/aATCLAsgCt3Hn8hJAiZNW5OAaSuALe0PwdstqLQ9vAyepyOUsBAHM4c8w7J4EKHGSilzZQtECl8kbYrG6vcTJKXLwBW5DkufwO0hmzySklzg5Ra6I5ADJi4KBISy7k5KnOEl39MoWmqTO4d/i2S0hWUZ3gPN+XJlI4zlAZoMyj2j2jOfO0tzJzfsTxTkLU9IWBZ+imp3z6uX218B5fTVUAtUB0uZwuJVAbXn9vGfra+D2eRwI0rgOkLQoeDSEbLbX/sR4XS2e/sNpC1tSLuy9RDd7WOow4H0gSKN7QMYcPo9vdVLqMOD5/gJ+wMlYFHyjwuphqcOA11x5RYULvM7hA0MqrPYScpFa3LzkyllLiX5KfiUgOeQaa4KLcpnhJM3hzxQZfVFypvSQKxOWKi2QXwnUkOvjk0O1uRl/xKo1WZ/DXS8KBpTZ7P7+SeMu4Paxak28zeEDQ+psTkrOlK5zpbpM6X5R8EKlzQmZPaWHvrKs0gnuLuzNKzW5IDdTus6VRaVecPNk/3O1FiclZ0qXuTKj1gsuFgUqC5z7vvLE7tzc7XYeKPaC4wt7j1Rzs57KzZQudzsl1W5wuih4ptzgOSm7b6978KJyPzibw+fV2/uFlN2311xpEZCDRcEdAubOeL8I6709+ZgCOPuLAuWNictJ7tDe3FyMcg8oOML+HH6XhLkjUlsTd+1JgYQn7C4K5mlY6/iCZVu4Djjn7UmJhivsXdj7lIixObmtiav2pEjEF3bmcOzLePJ2ctG64By3J1TA2VgUPBqiYqvTQ69IfW7GQYf/5xgVZ9T/FM8LMqaOSW5N3DwqRwdcvUXBvMUVnGmHm9NFOCFwe8/h31hswdkKOKcTASVwezUoA0N8wUVtgXM4EVACt9eigBI3h+Da7XFzeE+PFLjd5/BnFl9wNgPO4URAC9xui4JPaFn5BUTAORzCi7RcUvvC3gAtI53NcbYDzlnIfUfMJ7XmcFKNidOTk4h9bo5CrkTMJ7UWBd9Ss9HJCrzVATgnIVem5pTX5/B5ciaehwk4RyH3gJxXdl7Y+5SehU+BAs5JyCXouWX7HE5mJVClS0AB5yjk+un5pbpBeTREz74ZsIBzEnJJeo6pvrD3kqB5SbCAcxJyJYKe2ZrD5ylaNwcXcA5Cbpyia14tCu6QNG5Y/qGJi5DL9FP0zfqFvYEhkuCyAIcmW2rnXOQ2nuy/S9K0JGTAVZYEMbYj+KtFwTxNy/KgAWd/FZ6h6R7rZ58QNWzQpmOPueNmfxVOM1daUz+xWGdK02XAGcYB3rmSquxmykbDtUzOfSVV2X1NrOmem+2RoKRx2NckfMDZnsLHNQ7prUm7F262R4Kk5iG7NYl6Amd3JNAhJ/u4a783bsY+U4ecioAzDa9q0iGnIuAaPYMzjuqQw28p271zs3t+MqihyGspzagEcHbPT/QsZ0NfoyVK+8NcJqW51FPKXsBF5HCzO8wtazByTiljUUng7CbLJU1GSmfyliFNOlkyTJQOkqUe5kglSt1ZytEEeqJ0sCa4oPnsmijxRm8XyXJQlzlvBc6MSgZnnNJnlp50CXX0rtYZe3/5lmZUS7dg73XJWPC8rym5bkxMA0J2t+GTmtNO/UIomASc39bTG54dsntb4S0DSDbLXEYPBdt0OauuwDkrc5qcG25mGAyc7TKnyTnnBlXg1tUgNDkYbhATnIsyJzJ6x7Pel9jltt8Alu0njPWBs/05QO4ux1uDoidx+3M3xBGlhwdVNblbdj0VQ+Bm+7h59cQ50LuCUftfau8xUPRD2wYFecuTGrTtpv0Gks7YNikT2IPLX9j/nOYxA00O3or4vi5vdfQeHjcHrWUw02XK/tvxQE+6arSWDsgFL106SJMog4C7oaCifKCCbvShA9fEkLkZxhEn7/EeDFDQJQedeOaIga4GJ/YFJuhGbzlyy48MBTogdNDt1EVH4YY3wLkdxAMSdKlhwYGbY3I+n+lGJ7JMuDkn5+d86awpUcvNOTmx7NN8mRwWnLi5IOfLUpfKC2bcDOPPRODROS5uFf3YUC7nMScG308FG5v6eHNJzj/oXGGjwc0dOTHoh4TpDhsVbi7J8a91qRuusNHh5pqcyDN+PsT5AECPm3tyXEfy0Tm32OAeycHYFTAvdpfdlTZ1+4A993Mx179FjE8GI9gqe9MjBjk5uc1QI+yYVLvkjayHn2lGDcNn5CrsJsinzNREwtNPpMmtcvfrkPCmxcmUT1Pk+oMdYYOqzgivGp8jyS7lmRrqvVfEsaA67m4Qq3fJiUUJP2u/QVqnYhJ+Y6VXWRolkiBz+ayMXxTrMYjLY4tSlTQLSfWhNizpx1BtS7aRaxGylB2fUwYvOTeclfZDCLclsgtdFbxCEjltjlYiLSvzNxwzmKghJuRqMT+H9BqHC3P5hGTjYz8y2EhaodtBDzL2RpNz+cWsfLM5lLeqWfyMgNHi+I2cbHyjF3I3lhNABh8LG7x0ICbglB1fLiwlPY/qqQu5AkiUbaXJtwx2AkmXO5QYX74xt5S84CgER1PJ3NyN/HgC3j5eaVLiAZiDGFwcH8/nC4W5XC65qtSmLlT+tZTL5QqFfH55PJFANIpdmtzsLk0RYNE/LNkjXbYHl1skanAWaI9COdzeMphL4gmYDjcddDrcdND5NNyC1176JdyC1l4eDRv+UjCCzmw1/Kcf+j9L7g8bfpTf86WPmpIg5UtfZkn/o/NXL1kzX57RxU2XOiJqjxrBkL/QRVqN4Ki1RWPT6DQ2jU5jCwC6wGLj3aYEGhtbdLFjUUMryu00JRjjtr2DMEbFLvKnmte2jBnjkSNbNasdCje8Sz7YQjpH1tSRdlMHG9dqd5Rq96+DrW6T2aJTJFd2IULlLqKbf4ZxFwmd1Cycs1Nb72I6Q3o4hlbVZ5rHdDfiPfCQZ/PYUZ0gZQ14ISx4FWhHtL/lwms4Ctxrmu0aGtSxWGu8BaTomUdDB3VNA6cXkhh7sXfbNTPUzHkw1N7iqfCZq8h0F6Io+o60huJHHaXPmNnSfqxCTEcZDYInWw82xuPt7S0tLaZpVoVi5V/muy1H29vj8caDrb7h9f+s9uWffvvfcQAAAABJRU5ErkJggg==';
        }
        if (!wallet_money){
        wallet_money = 0;
        }
        if (!role){
        role = 'user';
        }
        if (!login_id){
        login_id = "";
        }
        if (!login_type){
        login_type = 0;
        }
        if (!nick_name){
        nick_name = "";
        }
        var k = await this.userModel.countDocuments({})
        const salt = await bcrypt.genSalt(10);
        const hashed_pass = await bcrypt.hash(password, salt);
        console.log(k);
        user_id = k + 1;
        let t = await this.userModel.findOne({user_name: user_name})
        if (user_name != null && t != null && user_name != "" && user_name != " "){
        var objJson1;
        return objJson1 = {"statusCode":"1"};
        }
        t = await this.userModel.findOne({phone_number: phone_number})
        if (!!t){
        return objJson1 = ('{"statusCode":"2"}');
        }
        console.log(hashed_pass);
        password = hashed_pass;
        const newCat = new this.userModel({
        user_name,
        password,
        full_name,
        phone_number,
        birth,
        gender,
        nick_name,
        avatar,
        wallet_money,
        role,
        login_type,
        login_id,
        user_id,
        });
        const result = await newCat.save();
        console.log(result);
        return objJson1 = ('{"statusCode":"0"}');
    }
    async findAll(): Promise<user[]> {
        return this.userModel.find().exec();
    }
    async updateUsername(phone_number: string, user_name_new: string){
        let newcat4 = await this.userModel.findOneAndUpdate({ phone_number: phone_number }, { user_name: user_name_new } );
        if (!phone_number || !user_name_new){
        var objJson1;
        return objJson1 = {"statusCode":"400","message":"Wrong format"};
        }
        return objJson1 = {"statusCode":"200","message":"Success"};
    }
    async updateFullname(phone_number: string, full_name_new: string){

        let newcat4 = await this.userModel.findOneAndUpdate({ phone_number: phone_number }, { full_name: full_name_new } );
        if (!phone_number || !full_name_new){
        var objJson1;
        return objJson1 = {"statusCode":"400","message":"Wrong format"};
        }
        return objJson1 = {"statusCode":"200","message":"Success"};
    }
    async updatePhoneNumber(phone_number: string, phone_number_new: string){
        let newcat4 = await this.userModel.findOneAndUpdate({ phone_number: phone_number }, { phone_number: phone_number_new } );
        if (!phone_number || !phone_number_new){
        var objJson1;
        return objJson1 = {"statusCode":"400","message":"Wrong format"};
        }
        return objJson1 = {"statusCode":"200","message":"Success"};
    }
    async updateBirth(phone_number: string, birth_new: Date){
        let newcat4 = await this.userModel.findOneAndUpdate({ phone_number: phone_number }, { birth: birth_new } );
        if (!phone_number || !birth_new){
        var objJson1;
        return objJson1 = {"statusCode":"400","message":"Wrong format"};
        }
        return objJson1 = {"statusCode":"200","message":"Success"};
    }
    async updateGender(phone_number: string, gender_new: string){
        let newcat4 = await this.userModel.findOneAndUpdate({ phone_number: phone_number }, { gender: gender_new } );
        if (!phone_number || !gender_new){
        var objJson1;
        return objJson1 = {"statusCode":"400","message":"Wrong format"};
        }
        return objJson1 = {"statusCode":"200","message":"Success"};
    }
    async updateNickName(phone_number: string, nick_name_new: string){
        let newcat4 = await this.userModel.findOneAndUpdate({ phone_number: phone_number }, { nick_name: nick_name_new } );
        if (!phone_number || !nick_name_new){
        var objJson1;
        return objJson1 = {"statusCode":"400","message":"Wrong format"};
        }
        return objJson1 = {"statusCode":"200","message":"Success"};
    }
    async updateAvatar(phone_number: string, avatar_new: string){
        let newcat4 = await this.userModel.findOneAndUpdate({ phone_number: phone_number }, { avatar: avatar_new } );
        if (!phone_number || !avatar_new){
        var objJson1;
        return objJson1 = {"statusCode":"400","message":"Wrong format"};
        }
        return objJson1 = {"statusCode":"200","message":"Success"};
    }
    async updatePassword(phone_number: string, password: string, password_new: string) {
        var k = await this.userModel.findOne({phone_number: phone_number});
        var f = await k.password;
        console.log(f);
        console.log(password);
        const isMatch = await bcrypt.compareSync(password, f);
        console.log(isMatch);
        
        if(isMatch == true){
        const salt = await bcrypt.genSalt(10);
        const hashed_pass = await bcrypt.hash(password_new, salt);
        let newcat4 = await this.userModel.findOneAndUpdate({ phone_number: phone_number }, { password: hashed_pass } );
        if (phone_number == null || password_new == null){
            var objJson1 = JSON.parse('{"statusCode":"400",\n"message":"Wrong format"}');
            return objJson1;
        }
        var objJson1 = JSON.parse('{"statusCode":"200",\n"message":"Success"}');
        return objJson1;
        }
        var objJson1 = JSON.parse('{"statusCode":"401",\n"message":"Unauthorized"}');
        return objJson1;
    }
    async findOne(user_namePostMan: string): Promise<user> {
        return this.userModel.findOne({ phone_number: user_namePostMan }).exec();
    }
    async compare(a: string, b: string){
        var objJson1;
        return objJson1 = {"statusCode":"400","message":"Wrong format"};
    }
    async deleteUser(user_id: number){
        var k = await this.userModel.countDocuments({});
        console.log(k);
        let newcat4 = await this.userModel.findOneAndRemove({ user_id: user_id });
        var k2 = await this.userModel.countDocuments({});
        var i: number;

        i = user_id;
        // typeof (i - 0);
        // let one = 1;
        i = +i + 1;
        //let i 
        console.log(i);
        while(i < k + 1){
        console.log(i);
        let newcat = await this.userModel.findOneAndUpdate({ user_id: i }, { user_id: i - 1 } );
        i++
        }
        console.log(k2);
        //return newcat4;
    }
    async validate(user_name: string, password: string, full_name: string, phone_number: string){
        var t = await this.userModel.findOne({user_name: user_name})
        
        if (user_name != null && t != null && user_name != "" && user_name != " "){
        //return '{code:1,ok:false}'; 
        //var k = '{"statusCode":"1"}';
        var objJson1 = JSON.parse('{"statusCode":"1"}');
        return objJson1;
        }
        var t = await this.userModel.findOne({phone_number: phone_number})
        if (t != null){
        var objJson1 = JSON.parse('{"statusCode":"2"}');
        return objJson1;
        }
        var objJson1 = JSON.parse('{"statusCode":"0"}');
        return objJson1;
    }
}