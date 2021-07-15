import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props) {
    return (
        <Box>
            <img src={`https://github.com/${props.githubUser}.png`} />
        </Box>
    )
}

export default function Home() {
    const githubUser = 'Nandosbx'
    const pessoasFavoritas = [
        'juunegreiros',
        'omariosouto',
        'peas',
        'rafaballerini',
    ]

    return (
        <>
            <AlurakutMenu />
            <MainGrid>
                <div
                    className="profileArea"
                    style={{ gridArea: 'profileArea' }}
                    style={{ borderRadius: '8px' }}
                >
                    <ProfileSidebar githubUser={githubUser} />
                </div>

                <div
                    className="welcomeArea"
                    style={{ gridArea: 'welcomeArea' }}
                >
                    <Box>
                        <h1 className="title">Bem-vindo(a)</h1>

                        <OrkutNostalgicIconSet />
                    </Box>
                </div>

                <div
                    className="profileRelationsArea"
                    style={{ gridArea: 'profileRelationsArea' }}
                >
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">
                            Pessoas da comunidade ({pessoasFavoritas.length})
                        </h2>
                        <ul>
                            {pessoasFavoritas.map((p, i) => {
                                return (
                                    <li key={i}>
                                        <a href={`/users/${p}`} key={p}>
                                            <img
                                                src={`https://github.com/${p}.png`}
                                                alt="Avatar"
                                            />
                                            <span>{p}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>
                </div>
            </MainGrid>
        </>
    )
}
