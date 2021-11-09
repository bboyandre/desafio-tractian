import React from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header = ()=> {

    return (
        <header className="header">
            <nav class="">
                <div className="" >
                </div>
                <div class="">
                    <ul class="">
                        <li>
                            <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABRCAMAAAA5KCgPAAAAkFBMVEX///88VKE4UaDs7/ZecK4zTZ41T5/w8fcpRptqe7bS1uY5UqAvSp34+fx7ibueqc/Ax96MmMSps9WQnchPZKl2hLluf7ixuNT29/tVaawjQ5ra3+0mRJpEW6Xl6PKCkMDK0OS4wNvX2+uXosnh5PBZba5KYamhqs2yu9hhc7Cqs9N5ib4XO5eQm8VQZqqHlMEoaX0aAAASVklEQVR4nO1daXeqOhSFIAENtF5rvc6CY7W97f//d0+kagj7JMGK2rXe+QoJGTbJmY/j/E8q9b1pa/P13lyt3T2tP1fb2S5ZevG9x/W7qO9dg4K8s9ju5f7VRo8/+BMIBO3N+4CFPmdMZLhyhSsYj0J/9fV3TnQcXGUNvzvHGxJYDh+3tp38RS3hF/vOy6rxc1rN8omnA5u3t9tm72mRjmynS1N/gUa/er64w+RlO/G5yCFVIMF83m0u4Aa/X2MNB2ne2Q5O6Z/d+IMZbJ1atu6WWm6MjUY99MVn58lnPye/ly94J7Rtwf1oPG4s5tMfXTBzPPjhZZ0ud+uxz8qYksAVhc20/Bc3rrGG4d+8s+cIPIye7KaQjOFiu3atvY9y0zdTo/mag/G+OE9cs5K2xI7Aiio1E340mKVTu1kjmvmw36hzQV+t53UETqrSVMfbnQqtrQ6NthSdgAUecktgESMZJ1atvWF5umtT03kXrBq/L7DcDFvu4L1lt2olikOMBNa0ZUlOFLyuuQWsDr2zwVvxSHwYYC3HuG/+atUcAMtlE8NaPiiw9tASPOwlF11eC+JzglkyFacV7TDfElaH7sPPttz8YYBFnOCuO0mslgEAy+VbPQf/sMA6jIP/WVqtXHEdGtSG8qdKgmfSqwCrfML+RlruRwHWaEBNw/9n8+dCYLlspm370MDa34jdtm70kFJGraPwK9yu8WZywRrwxlmqfRRg7agDyxUTG04WA0v4L7pGjw2s/fCHi4rqraBJD5037bt5Ijg105zD5NjFgwDLG9DjiP7YdACB5bpD3U//6MByBZ9VQ1aiu7/GtrLmsnfxKTvZfffxIMB6082EW9yFFLCETjR8eGDtkdWzWL0zaQ6sPVNh84fuafl5+fwF+/7IgwBrojt5bVQwFLBc0aVZ4McH1n7yVXjuJbUKBxIDK2lgegl7df7I+PlwDjwGsNqEriEntrVQwQyo1eBrcmd+A7AEr2CM+UNyqgfiO3MXzrSn78Q4YHEweTwGsPQ7KVwL6WjepWYSfVFX6W8A1n5A1rLh6FPPcrOG2YDq9X46eRFlJo+HAFaivQkzJanFdUB34lP//O8Alohsme6N6awJzUrSr58O1+UH6/sjACv+Z1gQEdmoYNKQau8TV8DvAJbrf1nMfk/eyqQjYF1THwm5iEfK3Bw03xHDl8Mp8AjAmhoOLFu7zguNrAQ2+CXAsjQ+6EXrnEyW1+lKiwfBfe5OJhOX+z5eIya+r4dHANaLeUGGNt5V8Rd18rHPOWpAAet1GELCa8nxy8Nve1LnAz8vUBRp9QR2kuHarNQ0/KH0CroHv4v162KXtpN2utv8e3KB44OYHF1KBlXWUPj45Y/vq+YyYMUWnhm+lVMXzXj6TcSnUMBatiDNZ6h79prg10e5zDDFTwuUpJ2ZOyZdCeysMeZbLFPraXtq094MLIpekqUknvdHnfVY0ceyYXJ8PCLW8BWsoXA3c/z693lyGbAsTnCXrawY2GlEHcA+UjRSwKLoGf3P/p8rOX7PZxNKb+7b6ALRlpV7WuhG65L3lz94Bjqf1tda/ihxMRQIaUSMYv9FwOpb3cYU/63OdEIqHYDauSqwFrUCaz/6GWVC9s2NTaJ1TmKiUZK+UWeecP8QvMioef4Z/K2FZ/XtgJXqZIwT2ahgDr1NqLURZWg+GrCc+I1QnZ+Nu2TTFzu9ZkTrWz3qF+dr2jfMWxyRFXVttuhmwOojxgXsd2SpJnwm/7qybPVwwNoPH99nZjPfEhxYogu6isguCA8TwRpa2aHNMjza2stvBqwWYt3BIrG1zbD39Er9uSJUb4EWkqPuC6w+lj/M+hbgOcoaKdiQiGIqKDUYfzJY1N4y/mNs6eFzM2ABlpM1EJc8tPRTC0hbF2soEgA8++8LLKcN73Jm8IV1HDC0MPXAn8N6BAIIqdI3ftp5Y2y8sJzfrYAVAI+yMF0C8YjPLIe+/KS9cxUMjIbgO/cFFhbuDGoCqIZlAw+NWLiEXQeflcK1MaetrR3qbwUswHLuFyQGjBfgkQhaku65kQrOpMzO3RtYG6h9MUw+aJZ/Jn+RiYpgwJgZItSJkRVk7ANtbwQsZELIFiQFgbd6FYxMKSlnjtVYw07pQ/cGFr6RDMBqA3knaxIDwAkGYYBNrVb2/yp0I2C9gVsrWxAEOLG2jreHmsxDHxN1CjN1zPcG1gj6ppXGXaA+uD9zfh9pn7FXKjQr2Jop7ek2wELBSvmCIGhEOgaxODQqus5lbqI0bCpfujewpghYhqWfg8v/4BWF41fH4A/tg7NNw+lfTLcBVhuJw4dLfQo0hUJovj0pnO8xLRqq5950W/xVfyOwngCPHpKP4B+K4+8iY5qCqnQbYKEL73tBkCZA56c27BW0LcsVaY9WRcPWuvCpewNrjq/CRNMEOfwfA99GwK7MgPM74tJOm3FFugmw5mBBjn9TAvpiW/pgHioSXwVX5aQw13sD6wLmHSkVjhx6gNQX/G+pD6h2Z/ahiLZ0E2BBfvF7QbwGOprpAQzdcfE8S4COKp9GyVV5I0va9wYW/Ig2ig1JOmdp7i9Y5HKGEOzFa6drqES3ABYy1Z0zDCAHbk6HzA9Li98h/bxUu2NhVe8MrGCLRs1WGqcEcNhIKUCgU2io7mQf8WLC/0E6JYJuASwg+UmfQCEngpMOP/tblSusw4K6DNlE0WP3pZQkdwYWdvZgPfojSDkq+6/BrRyonSC9e6a7vzbdAFgeML3INjHkee6Tdp2MXVO8+QLSHs1Vq2Fw9uO6L7BGmDXkmngKJFrLOSugYmys/KHYbPpaOaeWkW4ALBRlIHsLtQEXK0KKff84NC/K0f01aTVcKc3nJ2TdFVge4aioE/uRnmC8NLyg7gpMnsHJiMzL6QbAQmd+QXUH3bIoJelHPsTiBoxIe3SkcmsnB8x7AqtF5V4Y0kcHUk8UbzpkrBHd4pE1RR5EdhmkqlH9wEIHUjHTDuqO9CTNgcWU9WpT/rqCqblvj86bdwNW7M0on3Od2I9E66J04iH2XRGNMbAuT7VMUu3AipF+JUrkV5BTJFLBHOjjewvWxW3eUaKh4Koo/ZX76lwbWHHQN1LgTeftp4h0Lta4zyJnRbYq/n3IPibWBTYTA8vWyaoC1Q4s5NCmqFdiNAgqSevHcTHei1wYHSmn8q/x+wHq1wZWu/dqpmZjHWpCrzTS2QaJOMpJkyDUFD1Jp5jHuralsH5gQdCooTjQzEBENR+BJUQx6RFU0ByopBuaNrJNujawOmNuJka6kGVTYjTrPgVSZNkrEDoPcvkND6nPKqYttaK6gbVElqlPxVEIaWj2XBb89sepFyU7i0cmIysFK045qwFYPw6xZ016f1HvZQd5xM+6oQzXoAeWWpi9kitT3cBCN1TZ+Rh6Uw6hn9rZ7Kjqi5dkfJm/VTrJRMPHA9ZHQveO2NCwfMDBjZGVrtCk6Lq/T/OOeOpyxooAhdnh5CvSm7zo6OC0ycScoSr2dLh4OGDpEvRCt08Q3Yr906TthFF4bnhpGQOaagYWOooECPB6R0GHXWTXkSGo7vUbxcGIkoy5iDT7eBdg6ZyDY2SIicAElqhnX9blwcvBNoFSBaoXWNCAgLTLLXTY+Kj8kgwsESlvVIhi7YWPBSzVAFogFCshOGAVCBFG6honiNe5Vl5G9QKrDWIlFMVKTph9R9J38dJU07NsaYdSBRbTBh10fAdg8a7GXAezDuGIZCxgS1sDg3fLXhA/plqBBU3pOAgHeRPBNMpFYKk+kmRaAtdXvbrndI7m2wNLrvVQJnTBEWGDUJ0gwkB6Aa2QZSWjClQrsGCae+wjuUSKOzEpv6iw+aphnrYachXQ9BFxc2BFDW0CbZSxjrJ5wbHLNv/LAmUrU63Agr4/Tbw/UFoBGQ9V+VHlO5MPSjRk1sf9jYHFXT3vHCOZmcomEyA2U9bk7eA4/Ws7ONQJLBSBQzqGQG8iXvZ7K/U5VDrckWm4sGIM0G2BFW4Ny421fJROE/3NQvIG6eNqRHbJwO39tuoEFnKvFhG1PfAOK9+bpWVRT/H4hdTAq25/FN0SWIKhFHoyBdA3T9X5nggGacgqP1yQDimBykNpWN+YNQJrCb043qlOYZq5sqcQqLCqcBt9NTT1PER99bkT3RJYZuYGaufoxOVQYpIzuiFP1KxHNVyuTNNB5NsGINYILBQlITjJpRKFwdTrC4XWqX8vWXxIo7uS6ZbAMpRaxGH12uowOMDrvEbEQgv2YhiJl0UHW9QmOFB9wIJxXTrvaizPqFBAHEKoeEvQsYZjK07iisASMsEXTFlX51B3rGk0hwVRJCdmqrCF0OscgkMo+XcJHSPVByx44lLuexkh9fKeJ1PeglZF9bBM8cqVPU8xXQ9YYjI4E0pYmZV40Nfq2iJmXFvf6ws6z5zXaEqU/RVRU9Nt6uarIkIrhqI+YKEABz37DDUsqtXGClh0XuBS3A6iKwKruRydqIU9C1RbepGgaK1PTtdCTUT3zFTA/Tv0O6C0xss/7LSf4czCy6Y2YLWQ+kCfuxVl0lS5CajTAenRyRpEvoWO+XrAKmq0oYfn/iXd5QIryBkqmsAAAMnyGpMlCBhvpmCawcunPAwOyzSYx30VYEFrqEGThHxshCgMxhZYAelQqh6BgOoClrPDO6pxdYcV5EyqAViqgXXPaOjQKb1ZyDujAm680SZUdoa7xlKbdQELprkvxeUqBL2JijeFLbBKWYskMso1tQELMkxZxDbpMbODugMDvw8jJmTVdF9bBDNyG392ydLb0zRJn5ugkAb/NGlJ6gIW3BuTqDpC0xRcnoM1sJwlFbfDBiYNfH3AGuFA1Yiy6UCTMfQPMU9AtrxiH4fTm8Lnk+7nnroT14cjZvrUg7UBC/4zxhQBfVjnrZDx0B5YdCUi/qkfRo3AcnDKBkEV200hp2pM0oqZOfm/Ji5leUy5hoQsKDVEzNiZagIWfAM67hUIehO5Q+kHrQAs541aFZOSuUZgxTjPBCNKpUOFnDlfaIxCJvaDkWZA1ta2p41uQWoCFvwtdbmfcoJmsYIzODShEsCKqQKJqN6OTDUCywmwY34pycSBoN1Pl5HmSDg1sozIJalEtiVB1r7IqB5gQTWSjTMZ7Fn25qsCLMdpUDpmkehGUSewnBTf0CE6zrFmz8ZcB8+jwhRaP0UWf9dFI9YCLJyZ18b9FXoTyXdoNWB5lGioTzVWK7CI6qZCzeXlECy2CG0U38RhLV+4LSoVoh0ZSqTUAiycQJUuRyURjDqVlKTVgOXMqQRHWnV3rcByprhIEi9vFB6HVUkYGK6jKKhT8YMzi6/10dN1AAvHrqFopTKhXLeyBrEisIj+XH3qnnqBRVVJKukcoGgNg3PKhM9FJe1Y+/LbkPcMKo86gDXCwzUqazOC4TpSrbmqwHI2hNJBaJRqNQOrXCUjJ7UKJvQc1VsWz4T1Gkp4ysjVKUo1FL6bzIV1AGuGT3C7xBPY2jA+MiCVgYWNbdl4SZfD2oFFxBKpIUfwzCllZSIIC9hqloapVgVPEXPN13ENwILx8sY+j4QrJ5w6rw6smLAaatKH1w0s7CGk1jzAFj+7auwOsUlCKLgMFlizrqPI5KSfUQ3AghY/nctjkSCDdtKB4SwP+lKJRB7ZOwKLENqEL91UfajktA+GhysFAvmTFZnOHI6Rh0/3qQmNCjIZCi8VJwpLgRyTzl0ALCeBmRnvCiysUi/4eWIrxNi+YiDKh6EmUzzQbk1mU1FJcPfVLp7i+sCCMc0umQW5TNDOJSb5FXAJsHCG0vsCC3p/ZJ5Ox4M9hpwqM5k5JYL5MJT0rzmNnleoeBho7L/a1rC4OrACqInCpfMwQd7iGKB5EbCgJeC+wCJKLYqT0x/KWGcfypARFrDdMWLSvM5kbGC2BI/CbWJ9PlwdWDCsviRJ6wh7E7ksX4GLgOU8lUesA1bEylSq+aRQJ0SNyB8qfkUfYfxon4CP/UolJP6GEaAhIdHNvxqTiNLNMJ9/vqZVEkp+gfFzYQIWXMN8owY+ekZkqsUE95WNDyZP74P+tIb676VhRbS64W3bLNNWa8x3nBQ1av4j31/C95vNHIpxAz3bGjz8ijT9u0NEursEyeZ1Evq8GMeYnVTd3r/Unrk70AZNr5foG+GFP7DX3gouSKXqUq0eXPHDVRSg/rdmyWD6VGpFN4oDRIb/tXIjDzYI8jMpxk+vn+i/SP1p8vy1LVwZq5d05FX/cP+S8WvW8CoLglc8P/Rg/xZndHmi/f8A5wybFh6+UmwAAAAASUVORK5CYII=" alt="TRACTIAN" />
                        </li>
                        <li class="">
                            <a class="" href="#">Conheça o Produto<MdKeyboardArrowDown /></a>
                        </li>
                        <li class="">
                            <a class="" href="#">Sobre Nós<MdKeyboardArrowDown /></a>
                        </li>
                        <li class="">
                            <a class="" href="#">Materiais Gratuitos<MdKeyboardArrowDown /></a>
                        </li>
                        <li class="">
                            <a class="" href="#">Blog</a>
                        </li>
                        <li class="">
                            <a class="" href="#">Área do Cliente</a>
                        </li>
                        <li class="">
                            <a class=" " href="#">PT<MdKeyboardArrowDown /></a>
                        </li>
                        <li class="">
                            <a class="" href="#">Demonstração</a>
                        </li>
                        {/* <li class="">
                        <a class="" href="#">
                            
                        </a>
                        <ul class="">
                            <li><a class="" href="#">Action</a></li>
                            <li><a class="" href="#">Another action</a></li>
                            <li><a class="" href="#">Something else here</a></li>
                        </ul>
                        </li> */}
                        {/* <li class="">
                        <a class="">Disabled</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;