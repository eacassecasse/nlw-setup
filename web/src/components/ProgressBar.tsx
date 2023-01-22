interface ProgressBarProps {
    progress: number,
}

export function ProgressBar(props: ProgressBarProps) {

    return (
        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
            <div
                role="ProgressBar"
                aria-label="Progresso de h&aacute;bitos conclu&iacute;dos nesse dia"
                aria-valuenow={props.progress}
                className="h-3 rounded-xl bg-violet-600 transition-all"
                style={{ width: `${props.progress}%` }}></div>
        </div>
    );
}