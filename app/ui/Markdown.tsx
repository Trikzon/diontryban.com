import styles from '@/app/ui/Markdown.module.scss';

// import 'remark-alerts/styles/github-colors-light.css'
// import 'remark-alerts/styles/github-colors-dark-media.css'
import 'remark-alerts/styles/github-base.css'

export interface MarkdownProps {
    html: string
};

export default function Markdown({ html }: Readonly<MarkdownProps>) {
    return (<div className={styles.markdown} dangerouslySetInnerHTML={{ __html: html }} />);
}
