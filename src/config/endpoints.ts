const baseUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL

export const endpoints = (id?: string) => {
  const articles = {
    create: `${baseUrl}/articles`,
    get_all: `${baseUrl}/articles`,
    get_one: `${baseUrl}/articles/${id}`,
    update: `${baseUrl}/articles/${id}`,
    delete: `${baseUrl}/articles/${id}`,
  }

  const media = {
    create: `${baseUrl}/media`,
    get_all: `${baseUrl}/media`,
    get_one: `${baseUrl}/media/${id}`,
    update: `${baseUrl}/media/${id}`,
    delete: `${baseUrl}/media/${id}`,
  }

  const newsletter = {
    create: `${baseUrl}/newsletter`,
    get_all: `${baseUrl}/newsletter`,
    get_one: `${baseUrl}/newsletter/${id}`,
    update: `${baseUrl}/newsletter/${id}`,
    delete: `${baseUrl}/newsletter/${id}`,
    subscribe: `${baseUrl}/newsletter/subscribe`,
  }

  const series = {
    create: `${baseUrl}/series`,
    get_all: `${baseUrl}/series`,
    get_one: `${baseUrl}/series/${id}`,
    update: `${baseUrl}/series/${id}`,
    delete: `${baseUrl}/series/${id}`,
  }

  const users = {
    signup: `${baseUrl}/users/signup`,
    signin: `${baseUrl}/users/signin`,
    get_all: `${baseUrl}/users`,
    get_one: `${baseUrl}/users/${id}`,
    update: `${baseUrl}/users/${id}`,
    delete: `${baseUrl}/users/${id}`,
  }

  return {articles, media, newsletter, series, users}
}