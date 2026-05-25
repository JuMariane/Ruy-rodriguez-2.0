import { isSupabaseConfigured, supabaseFetch } from './supabaseClient';

import projetoBanner from '../assets/projeto-banner.jpg';
import visitaIac from '../assets/visita-iac.jpg';
import baciaHidro from '../assets/bacia-hidrografica.jpg';
import chiquinhaImg from '../assets/chiquinha-gonzaga.jpg';
import teatroOriki from '../assets/teatro-oriki.jpg';
import sambaRuy from '../assets/samba-ruy.jpg';
import nzingaImg from '../assets/nzinga-mbandi.jpg';

export interface ProjectPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tag: string;
  image: string;
  link: string;
  likes: number;
  authorEmail?: string;
  created_at?: string;
}

const initialProjects: ProjectPost[] = [
  {
    id: "proj-1",
    title: "Jornada de Investigação Científica",
    subtitle: "Apresentação e Banners na Escola",
    date: "Novembro 2025",
    description: "Estudantes apresentaram banners científicos com resultados de pesquisas sobre a qualidade da água e meio ambiente regional.",
    tag: "Ciências",
    image: projetoBanner,
    link: "#",
    likes: 12,
  },
  {
    id: "proj-2",
    title: "Visita ao Instituto Agronômico",
    subtitle: "IAC-Apta Portas Abertas",
    date: "Outubro 2025",
    description: "Visita técnica ao Instituto Agronômico de Campinas com apresentação de linhas de pesquisa e visitas guiadas.",
    tag: "Técnico / Novotec",
    image: visitaIac,
    link: "#",
    likes: 8,
  },
  {
    id: "proj-3",
    title: "Estudo da Bacia Hidrográfica",
    subtitle: "Visita Técnica e Análises",
    date: "Maio 2025",
    description: "Coleta e análise de amostras de água em nascentes do Parque Itajaí para verificar a qualidade hídrica regional.",
    tag: "Meio Ambiente",
    image: baciaHidro,
    link: "#",
    likes: 15,
  },
  {
    id: "proj-4",
    title: "Projeto Chiquinha Gonzaga",
    subtitle: "Trilha de Educação Antirracista",
    date: "Novembro 2023",
    description: "Projeto interdisciplinar de valorização da música e cultura afro-brasileira a partir da história da compositora.",
    tag: "Eletivas",
    image: chiquinhaImg,
    link: "#",
    likes: 24,
  },
  {
    id: "proj-5",
    title: "Peça Peatral Olorum Ayé",
    subtitle: "Grupo Oriki de Teatro",
    date: "Outubro 2023",
    description: "Peça de teatro auto-organizada pelos alunos celebrando a mitologia e a ancestralidade afro-brasileira.",
    tag: "Clubes",
    image: teatroOriki,
    link: "#",
    likes: 19,
  },
  {
    id: "proj-6",
    title: "O Samba do Ruy",
    subtitle: "Atividade de Eletiva Artística",
    date: "Setembro 2023",
    description: "Apresentação musical e debate histórico sobre o samba como patrimônio e manifestação popular brasileira.",
    tag: "Cultura",
    image: sambaRuy,
    link: "#",
    likes: 31,
  },
  {
    id: "proj-7",
    title: "Projeto Nzinga Mbandi",
    subtitle: "Trilha de Educação Antirracista",
    date: "Novembro 2023",
    description: "Atividade interdisciplinar sobre a rainha guerreira Nzinga Mbandi e sua liderança na resistência à escravidão.",
    tag: "Eletivas",
    image: nzingaImg,
    link: "#",
    likes: 18,
  },
  {
    id: "proj-8",
    title: "Maculelê e Danças Afro-Brasileiras",
    subtitle: "Cultura Popular e Movimento",
    date: "Novembro 2023",
    description: "Atividade de expressão corporal e resgate da dança folclórica Maculelê com bastões e dança do Carimbó.",
    tag: "Eletivas",
    image: projetoBanner,
    link: "#",
    likes: 22,
  },
  {
    id: "proj-9",
    title: "Máscaras Africanas e Arte de Resistência",
    subtitle: "História e Resistência",
    date: "Novembro 2023",
    description: "Exposição artística com réplicas de máscaras tradicionais para discutir a religiosidade e a diversidade das culturas africanas.",
    tag: "Eletivas",
    image: teatroOriki,
    link: "#",
    likes: 14,
  },
  {
    id: "proj-10",
    title: "Propaganda Publicitária Antirracista",
    subtitle: "Língua Portuguesa e Conscientização",
    date: "Novembro 2023",
    description: "Criação de propagandas publicitárias em vídeo contra o preconceito racial e homenagem ao rapper Sabotage.",
    tag: "Eletivas",
    image: sambaRuy,
    link: "#",
    likes: 27,
  }
];

// LocalStorage helpers
const LOCAL_POSTS_KEY = "ruy_mural_posts";

function getLocalPosts(): ProjectPost[] {
  if (typeof window === "undefined") return initialProjects;
  try {
    const data = localStorage.getItem(LOCAL_POSTS_KEY);
    return data ? JSON.parse(data) : initialProjects;
  } catch {
    return initialProjects;
  }
}

function saveLocalPosts(posts: ProjectPost[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_POSTS_KEY, JSON.stringify(posts));
  } catch (e) {
    console.error("Error saving posts to localStorage:", e);
  }
}

export const dbService = {
  // --- POSTS SECTION ---

  async getPosts(): Promise<ProjectPost[]> {
    if (isSupabaseConfigured()) {
      try {
        const response = await supabaseFetch('/posts?order=created_at.desc', {
          method: 'GET',
        });
        const posts = await response.json();
        
        if (Array.isArray(posts)) {
          if (posts.length === 0) {
            // Database is empty, let's pre-populate it with initialProjects for a premium experience
            try {
              await supabaseFetch('/posts', {
                method: 'POST',
                body: JSON.stringify(initialProjects.map(p => ({
                  ...p,
                  created_at: new Date().toISOString()
                }))),
              });
              return initialProjects;
            } catch (populateError) {
              console.error("Failed to pre-populate Supabase posts:", populateError);
            }
          }
          return posts as ProjectPost[];
        }
      } catch (error) {
        console.error("Supabase getPosts failed, falling back to localStorage:", error);
      }
    }

    return getLocalPosts();
  },

  async createPost(post: ProjectPost): Promise<ProjectPost> {
    if (isSupabaseConfigured()) {
      try {
        const postData = {
          ...post,
          created_at: new Date().toISOString(),
        };
        await supabaseFetch('/posts', {
          method: 'POST',
          body: JSON.stringify(postData),
        });
        return postData;
      } catch (error) {
        console.error("Supabase createPost failed, falling back to localStorage:", error);
      }
    }

    const localPosts = getLocalPosts();
    const updated = [post, ...localPosts];
    saveLocalPosts(updated);
    return post;
  },

  async deletePost(id: string): Promise<boolean> {
    if (isSupabaseConfigured()) {
      try {
        await supabaseFetch(`/posts?id=eq.${encodeURIComponent(id)}`, {
          method: 'DELETE',
        });
        return true;
      } catch (error) {
        console.error("Supabase deletePost failed, falling back to localStorage:", error);
      }
    }

    const localPosts = getLocalPosts();
    const updated = localPosts.filter(p => p.id !== id);
    saveLocalPosts(updated);
    return true;
  },

  async updateLikes(id: string, newLikesCount: number): Promise<boolean> {
    if (isSupabaseConfigured()) {
      try {
        await supabaseFetch(`/posts?id=eq.${encodeURIComponent(id)}`, {
          method: 'PATCH',
          body: JSON.stringify({ likes: newLikesCount }),
        });
        return true;
      } catch (error) {
        console.error("Supabase updateLikes failed, falling back to localStorage:", error);
      }
    }

    const localPosts = getLocalPosts();
    const updated = localPosts.map(p => p.id === id ? { ...p, likes: newLikesCount } : p);
    saveLocalPosts(updated);
    return true;
  }
};
